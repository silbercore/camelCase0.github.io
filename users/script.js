new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      headers: [
        { text: 'ID', align: 'start', sortable: false, value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      userList: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      ],
      dialog: false,
      formTitle: '',
      editedItem: {
        id: '',
        name: '',
        email: ''
      },
    }
  },
  methods: {
    editItem (item) {
      this.formTitle = 'Edit Item'
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.userList.indexOf(item)
      if (confirm('Are you sure you want to delete this item?')) {
        this.userList.splice(index, 1)
      }
    },
    save () {
      if (this.editedItem.id === '') {
        // New item
        this.editedItem.id = this.userList.length + 1
        this.userList.push(this.editedItem)
      } else {
        // Edit existing item
        const index = this.userList.findIndex(user => user.id === this.editedItem.id)
        if (index !== -1) {
          this.userList.splice(index, 1, this.editedItem)
        }
      }
      this.close()
    },
    close () {
      this.dialog = false
      this.editedItem = {
        id: '',
        name: '',
        email: ''
      }
    },
    initialize () {
      this.userList = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
      ]
    }
  }
})
