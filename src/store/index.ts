import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem [],
    editingItem: {} as RecordItem
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem("recordList") || "[]") as RecordItem[];
    },
    createRecords(state, record) {
      const record2: RecordItem = record;
      state.recordList.push(record2);
      store.commit("saveRecords");
    },
    reset(state) {
      state.editingItem.notes = "";
    },

    saveRecords(state) {
      window.localStorage.setItem("recordList", JSON.stringify(state.recordList));
    },
    // createTag(state, name: string) {
    //   const names = state.tagList.map(item => item.name);
    //   if (names.indexOf(name) >= 0) {
    //     window.alert('标签名重复了');
    //   }
    //   const id = createId().toString();
    //   state.tagList.push({id, name: name});
    //   store.commit('saveTags');
    //   window.alert('添加成功');
    // },


  }
});
export default store;