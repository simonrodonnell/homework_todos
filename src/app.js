import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {taskName: "Buy shopping", priority: "high"},
        {taskName: "Clean bathroom", priority: "low"},
        {taskName: "Car's MOT", priority: "normal"}],
      newItem: "",
      newItemPriority: "normal"
    },
    methods: {
      addNewItem: function () {
        this.items.push({taskName: this.newItem, priority: this.newItemPriority});
        this.newItem = "";
      },
      // changePriority: function () {
      //
      // }
    }
  });
});
