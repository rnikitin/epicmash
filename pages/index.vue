  <template>
  <div class="epicList">
    <p>Put all your ideas or tasks here each one on its own line.</p>
    <div class="form-group">
      <textarea class="form-control" rows="12" v-bind:value="rawText" @input="epicListChanged"></textarea>
    </div>
    <n-link to="/game" class="btn btn-primary btn-lg active">Play</n-link>
  
    <ul>
      <li v-for="item in sortedList">
        {{item}}
      </li>
    </ul>
  </div>
</template>

  <script>
import {mergeSort} from '~/logic/mergeSort';
export default {
  head: {
    title: "Epicmash - Epic ranking system for any kind of a task"
  },

  computed: {
    rawText() {
      return this.$store.state.localStorage.rawText;
    },

    sortedList() {
      return mergeSort(this.$store.state.localStorage.list.map(el => { return parseInt(el.epic); }));
    }
  },

  methods: {
    epicListChanged(e) {
      this.$store.commit("localStorage/save", e.target.value);
    }
  }
};
</script>

<style>
</style>
