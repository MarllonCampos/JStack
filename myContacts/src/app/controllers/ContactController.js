const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    // Obter UM registro
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(contact);
  }

  async store(req, res) {
    // Criar um registro
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required!' });
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });
    res.send(contact);
  }

  async delete(req, res) {
    // Delete um registro
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);

    // Retorna no content
    res.sendStatus(204);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!name) {
      return res.status(400).json({ error: 'Name is required!' });
    }
    const contactEmailExists = await ContactsRepository.findByEmail(email);

    if (contactEmailExists && contactEmailExists.id !== id) {
      return res.status(400).json({ error: 'This e-mail has already been taken' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    res.json(contact);
  }
}

// Singleton
module.exports = new ContactController();
