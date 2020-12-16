import { mount, createLocalVue } from '@vue/test-utils'
import Home from '@/pages/index.vue'
import VueRouter from 'vue-router'
import userRepos from './mock/userRepositories.json'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const wrapper = mount(Home, {
    router,
    localVue,
    stubs: ['Profile', 'Repositories'],
    data() {
        return {
            userRepositories: [],
            userProfileDetails: {},
            defaultUser: '',
        }
    },
})

describe('Home component', () => {
    describe('home component data', () => {
        test('search button is visible', () => {
            expect(wrapper.find('.btn__search').exists()).toBe(true)
        })

        test('userRepositories is empty by default', () => {
            expect(wrapper.vm.userRepositories).toEqual([])
        })

        test('userRepositories is of array type and has length 3', () => {
            wrapper.setData({ userRepositories: userRepos })
            expect(typeof wrapper.vm.userRepositories).toBe('object')
            expect(Array.isArray(wrapper.vm.userRepositories)).toBe(true)
            expect(wrapper.vm.userRepositories).toHaveLength(3)
        })
    })

    describe('computed properties', () => {
        // test('topThreeRepos', () => {
        //     wrapper.setData({
        //         userRepositories: userRepos,
        //     })
        //     wrapper.vm.filterTopThreeRepos = jest.fn()
        //     expect(wrapper.vm.filterTopThreeRepos).toHaveBeenCalled()
        // })

        test('owner', () => {
            expect(typeof wrapper.vm.userProfileDetails).toBe('object')
            expect(wrapper.vm.owner).toBe(undefined)
            wrapper.setData({
                userProfileDetails: { login: 'homeday', name: 'homeday' },
            })
            expect(wrapper.vm.owner).toBe('homeday')
        })

        test('topRepoHeader', () => {
            wrapper.setData({
                userProfileDetails: { login: 'homeday', name: 'homeday' },
            })
            expect(wrapper.vm.topRepoHeader).toBe("homeday's top repositories")
        })
    })

    describe('methods', () => {
        test('filterTopThreeRepos', () => {
            wrapper.setData({
                userRepositories: userRepos,
            })
            wrapper.vm.filterTopThreeRepos(userRepos)
            // expect(wrapper.vm.filterTopThreeRepos(userRepos)).toHaveBeenCalled()
        })
        test('goToSearch', () => {
            const spy = jest.fn()
            wrapper.vm.$router.push = spy
            wrapper.find('.btn__search').trigger('click')
            expect(spy).toHaveBeenCalled()
        })
    })
})
