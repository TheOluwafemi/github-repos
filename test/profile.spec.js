import { mount } from '@vue/test-utils'
import Profile from '@/components/profile/profile.vue'

describe('Profile component', () => {
    test('check props type and default value', () => {
        const wrapper = mount(Profile, {
            propsData: {
                profile: {},
            },
        })
        expect(wrapper.vm.profile).toMatchObject({})
        expect(typeof wrapper.vm.profile).toBe('object')
    })

    test('validate resulting markup is correctly rendered', () => {
        const wrapper = mount(Profile, {
            propsData: {
                profile: {
                    login: 'homeday-de',
                    avatar_url:
                        'https://avatars2.githubusercontent.com/u/5467961?v=4',

                    name: 'Homeday',
                    blog: 'https://www.homeday.de',
                    location: null,
                    email: null,
                    bio: null,
                    twitter_username: null,
                    public_repos: 19,
                    public_gists: 0,
                    followers: 0,
                    following: 0,
                },
            },
        })
        expect(wrapper.find('.content__header').text()).toBe('Homeday')
    })
})
