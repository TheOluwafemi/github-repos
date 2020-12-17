import { mount } from '@vue/test-utils'
import Repositories from '@/components/repositories/repositories.vue'
import userRepos from './mock/userRepositories.json'

describe('Repositories component', () => {
    test('check props type and default value', () => {
        const wrapper = mount(Repositories, {
            propsData: {
                repositories: [],
                owner: '',
                headerText: '',
            },
            stubs: {
                NuxtLink: true,
            },
        })
        expect(wrapper.vm.repositories).toMatchObject({})
        expect(typeof wrapper.vm.repositories).toBe('object')
        expect(wrapper.vm.owner).toEqual('')
        expect(typeof wrapper.vm.owner).toBe('string')
        expect(wrapper.vm.headerText).toEqual('')
        expect(typeof wrapper.vm.headerText).toBe('string')
    })

    test('validate resulting markup is correctly rendered', () => {
        const wrapper = mount(Repositories, {
            propsData: {
                repositories: userRepos,
                owner: 'Homeday',
                headerText: "Homeday's repositories",
            },
            stubs: {
                NuxtLink: true,
                fa: true,
            },
        })
        expect(wrapper.find('.content__header').text()).toBe(
            "Homeday's repositories"
        )
        const repoList = wrapper.findAll('li')
        expect(repoList).toHaveLength(3)
    })
})
