<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th class="table--thead-checkbox">
            <input
              class="table--checkbox"
              type="checkbox"
              @click="selectAllFunc"
              v-model="selectAll"
            />
          </th>
          <th class="table--thead">Name</th>
          <th class="table--thead">Category</th>
          <th class="table--thead">Availability</th>
          <th class="table--thead">Arrival</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ name, category, availability, arrival },
          index) in dataTable"
          :key="name"
          class="table--tr"
        >
          <td class="table--td">
            <input
              class="table--checkbox"
              type="checkbox"
              v-model="selected[index]"
            />
          </td>
          <td class="table--td">{{ name }}</td>
          <td class="table--td">{{ category }}</td>
          <td class="table--td">{{ availability }}</td>
          <td class="table--td">{{ arrival }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Table",
  data() {
    return {
      selectAll: false,
      selected: Array.from(Array(4), () => {
        return false;
      })
    };
  },
  watch: {
    selected(selectedVal) {
      const howManySelected = selectedVal.filter(val => val);
      if (!selectedVal.every(val => val)) {
        this.selectAll = false;
      } else {
        this.selectAll = true;
      }

      this.setHowManySelected(howManySelected.length);
    }
  },
  methods: {
    ...mapMutations(["setHowManySelected"]),
    selectAllFunc() {
      if (this.selected.every(val => val)) {
        this.selected = this.selected.map(val => !val);
      } else {
        this.selected = this.selected.map(() => true);
      }
    },
    selectCheckbox() {
      this.selected = ++this.selected;
    }
  },
  computed: {
    dataTable() {
      const randomArray = arr => {
        return arr[Math.floor(Math.random() * arr.length)];
      };

      return Array.from(Array(4), (_, index) => {
        const tmp = ++index;
        return {
          name: `Table 0${tmp}`,
          category: `Category 01`,
          availability: randomArray(["Available", "FULL"]),
          arrival: randomArray(["Arrived", "Hasn't arrived"])
        };
      });
    }
  }
};
</script>

<style lang="scss">
.table {
  width: 100%;
  margin: 50px 0;

  &--thead {
    opacity: 0.4;
    text-align: left;
    padding: 20px 0;

    &-checkbox {
      opacity: 1;
      width: 50px;
    }
  }

  &--td {
    padding: 20px 0;
  }

  &--checkbox {
    display: block;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    outline: none;
    appearance: none;
    background-color: #f2f2f2;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: #4339f2;

      &:after {
        border-color: #fff;
        opacity: 1;
      }
    }

    &:after {
      opacity: 0;
      content: "";
      display: block;
      position: absolute;
      width: 3px;
      height: 9px;
      border: 2px solid #333;
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 2px;
      transform: rotate(43deg);
    }

    &-box {
      display: block;
      margin: 0 auto;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background-color: #e4e4e4;
    }
  }
}
</style>
