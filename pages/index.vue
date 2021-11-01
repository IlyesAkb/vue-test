<template>
  <v-container>
    <v-dialog class="text-center" v-model="dialog" width="500">
      <v-card>
        <v-card-title>Информация</v-card-title>
        <v-card-text>Клочество элементов: {{ items.length }}</v-card-text>
        <v-card-actions>
          <v-btn class="mr-3" @click="toggleDialog"> Закрыть </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row justify="center" align="center">
      <v-col md="12">
        <v-list>
          <v-list-item-group v-model="selection">
            <v-list-item v-for="item in items" :key="item.id">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn class="mr-3" color="green" @click="addItem">
        Добавить элемент
      </v-btn>
      <v-btn class="mr-3" color="red" @click="removeItem">
        Удалить элемент
      </v-btn>
      <v-btn color="blue" @click="toggleDialog">Количество элементов</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      selection: 0,
      dialog: false,
    }
  },
  computed: {
    items() {
      return this.$store.state.list.items
    },
  },
  methods: {
    addItem() {
      this.$store.dispatch('list/addItem')
    },
    removeItem() {
      this.$store.dispatch('list/removeItem', this.selection)
    },
    toggleDialog() {
      this.dialog = !this.dialog
    },
  },
}
</script>
