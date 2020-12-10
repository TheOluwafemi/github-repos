import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header', () => {
    test('header is a Vue instance', () => {
        const wrapper = mount(Header)
        expect(wrapper.vm).toBeTruthy()
    })
})
