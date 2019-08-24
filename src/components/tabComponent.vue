
<template>
 
</template>
<script>
import panel from "./panel";
export default {
  data() {
    return {
           bookList1: [
          { name: "a", num: 50, n: 1, fire: true },
          { name: "a", num: 90, n: 2,fire: true },
          { name: "a", num: 80, n: 3 },
          { name: "a", num: 78, n: 4 },
          { name: "a", num: 98, n: 3 },
          { name: "a", num: 66, n: 1 },
          { name: "a", num: 89, n: 4 },
          { name: "a", num: 50, n: 2 },
          { name: "a", num: 98, n: 2 },
          { name: "a", num: 50, n: 3 },
          { name: "a", num: 30, n: 4 },
          { name: "a", num: 50, n: 1 },
      ],
      bookList2: [
          { name: "a", num: 50, n: 1, fire: true },
          { name: "a", num: 90, n: 2,fire: true },
          { name: "a", num: 80, n: 3 },
          { name: "a", num: 78, n: 4 },
          { name: "a", num: 98, n: 3 },
          { name: "a", num: 66, n: 1 },
          { name: "a", num: 89, n: 4 },
          { name: "a", num: 50, n: 2 },
          { name: "a", num: 98, n: 2 },
          { name: "a", num: 50, n: 3 },
          { name: "a", num: 30, n: 4 },
          { name: "a", num: 50, n: 1 },
      ]
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    }
  },
  components: {
    panel: panel
  }
};
</script>
