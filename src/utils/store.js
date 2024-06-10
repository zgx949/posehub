import { defineStore } from 'pinia'
import {ref} from "vue"

export const usePosePkgStore = defineStore('posePkg', () => {
    const posePkg = ref([])
    function add(pose) {
        posePkg.value.push(pose)
    }
    function remove(pose) {
    }
    function clear() {
        posePkg.value = []
    }
    function all() {
        return posePkg.value
    }
    function exists(pose) {
        for (let i = 0; i < posePkg.value.length; i++) {
            const pkg = posePkg.value[i]
            if (pkg.id === pose.id) {
                return true
            }
        }
        return false
    }
    function setter(poses) {
        posePkg.value = poses
    }


    return { add, remove, clear, all, exists, setter }
})