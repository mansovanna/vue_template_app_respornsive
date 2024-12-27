import { defineStore } from "pinia";

export const useSearchStore = defineStore('search', {
    id: "search",
    state: () => ({
        search: "", // 搜索关键字  
        isSearchbarShow: false, // 是否显示搜索栏
        isClearShow: false, // 是否显示清空按钮
    }),

    // actions:
    actions: {

        showSearchbar() {
            this.isSearchbarShow = this.isSearchbarShow ? false : true;
            alert(this.isSearchbarShow);
        },

        clearSearch(){
            if(this.search !== "" || this.search !== null){
                this.search = "";
                this.isClearShow = false;
            }else{
                this.isSearchbarShow = true;
            }
        },
        setSearch(search) {
            this.search = search;
        }
    }
});