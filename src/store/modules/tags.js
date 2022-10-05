export default {
    namespaced: true,
    state: {
        editableTabsValue: '',
        editableTabs: [{
            title: '首页',
            name: 'home'
        }],
    },
    mutations: {
        getTags(state) {
            const tags = sessionStorage.getItem('tags')
            if (tags) {
                state.editableTabs = JSON.parse(tags)
            }
        },
        addTags(state, data) {
            console.log(data);
            let index = state.editableTabs.findIndex(item => item.name === data.name)
            if (index === -1) {
                state.editableTabs.push(data)
            }
            console.log(data.name);
            state.editableTabsValue = data.name

            sessionStorage.setItem('tags', JSON.stringify(state.editableTabs))
        },
        setEditValue(state, val) {
            state.editableTabsValue = val
        },
        newTags(state, data) {
            state.editableTabs = data
            sessionStorage.setItem('tags', JSON.stringify(state.editableTabs))
        }
    },
    actions: {}
}