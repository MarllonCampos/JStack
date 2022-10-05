const { v4 } = require('uuid');

let contacts = [

  {
    id: '1',
    name: 'Marllon',
    email: 'marllondcsp@gmail.com',
    phone: '12321231232',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Rubens',
    email: 'Rubens@gmail.com',
    phone: '331231312',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Charles',
    email: 'charles@gmail.com',
    phone: '1212492213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Warley',
    email: 'warley@gmail.com',
    phone: '4412312312123',
    category_id: v4(),
  },
];

class ContactsRepository {
  async findAll() {
    return new Promise((resolve) => setTimeout(() => {
      resolve(contacts);
    }, 350));
  }

  async findById(id) {
    return new Promise((resolve) => setTimeout(() => {
      resolve(contacts.find((contact) => contact.id === id));
    }, 350));
  }

  async findByEmail(email) {
    return new Promise((resolve) => setTimeout(() => {
      resolve(contacts.find((contact) => contact.email === email));
    }, 350));
  }

  async delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      setTimeout(() => {
        resolve();
      }, 350);
    });
  }

  async create({
    name,
    email,
    phone,
    category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      setTimeout(() => {
        resolve(contacts);
      }, 350);
    });
  }

  async update(id, {
    name,
    email,
    phone,
    category_id,
  }) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      let updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };
      if (!email) {
        console.log('não tem email');
        const userInfo = await this.findById(id);
        console.log({ userInfo });
        // eslint-disable-next-line quote-props
        updatedContact = { ...updatedContact, 'email': userInfo.email };
      }
      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      setTimeout(() => {
        resolve(contacts);
      }, 350);
    });
  }
}

module.exports = new ContactsRepository();
