<template>
    <div id="addToList" class="main">
        <h1 class="pt-10">Today's Snacks</h1>
        <div style="width: 500px;" class="mx-auto">

            <v-table
            fixed-header
            max-height="80vh"
            class="mt-10"
            theme="dark"
            >
            <thead>
                <tr>
                    <th class="text-left">
                        Snack
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                    <th class="text-right">
                        Edit/Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                <td class="text-right">
                    <v-btn variant="plain" icon="mdi-pencil"></v-btn>
                    <v-btn variant="plain" icon="mdi-delete"></v-btn>
                </td>
            </tr>
        </tbody>
    </v-table>
    <div class="mt-10 justify-space-between">
        <v-btn>Have a Snack</v-btn>
        <v-btn>View the Log</v-btn>

    </div>
</div>
</div>
</template>
<style scoped>
.main{
    height: 100vh;
    width: 100vw;
    background-color: #f2e090;
}
.main h1{
    color: black;
    text-align: center;
}
</style>
<script>
  export default {
      data () {
          return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>