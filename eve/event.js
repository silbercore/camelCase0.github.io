new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        headers: [
          { text: 'ID', align: 'start', sortable: false, value: 'id' },
          { text: 'Event Name', value: 'name' },
          { text: 'Date', value: 'date' },
          { text: 'Result', value: 'result' },
          { text: 'People', value: 'people' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        eventResults: [
          { id: 1, name: 'Marathon', date: '2024-02-24', result: '1st', people: 1000 },
          { id: 2, name: 'Soccer Tournament', date: '2024-03-15', result: 'Runner-up', people: 500 },
          { id: 3, name: 'Basketball Game', date: '2024-04-10', result: '3rd Place', people: 300 },
        ],
        dialog: false,
        formTitle: '',
        editedItem: {
          id: '',
          name: '',
          date: '',
          result: '',
          people: ''
        },
      }
    },
    methods: {
      editItem (item) {
        this.formTitle = 'Edit Result'
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.eventResults.indexOf(item)
        if (confirm('Are you sure you want to delete this result?')) {
          this.eventResults.splice(index, 1)
        }
      },
      save () {
        if (this.editedItem.id === '') {
          // New result
          this.editedItem.id = this.eventResults.length + 1
          this.eventResults.push(this.editedItem)
        } else {
          // Edit existing result
          const index = this.eventResults.findIndex(result => result.id === this.editedItem.id)
          if (index !== -1) {
            this.eventResults.splice(index, 1, this.editedItem)
          }
        }
        this.close()
      },
      close () {
        this.dialog = false
        this.editedItem = {
          id: '',
          name: '',
          date: '',
          result: '',
          people: ''
        }
      },
      initialize () {
        this.eventResults = [
          { id: 1, name: 'Marathon', date: '2024-02-24', result: '1st', people: 1000 },
          { id: 2, name: 'Soccer Tournament', date: '2024-03-15', result: 'Runner-up', people: 500 },
          { id: 3, name: 'Basketball Game', date: '2024-04-10', result: '3rd Place', people: 300 },
        ]
      }
    }
  })
  