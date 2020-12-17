import { mount, createLocalVue } from '@vue/test-utils'
import Form from '@/components/form/form.vue'
import Vuelidate from 'vuelidate'

const localVue = createLocalVue()
localVue.use(Vuelidate)

const wrapper = mount(Form, {
    localVue,
    data() {
        return {
            usernameField: 'home',
            emailField: '',
            termsField: null,
        }
    },
})

describe('Form component', () => {
    describe('form component template and data', () => {
        test('form is visible', () => {
            expect(wrapper.find('.form').exists()).toBe(true)
        })
        test('form has username input field', () => {
            expect(wrapper.find('#username').exists()).toBe(true)
        })
        test('form has email input field', () => {
            expect(wrapper.find('#email').exists()).toBe(true)
        })
        test('form has terms input field', () => {
            expect(wrapper.find('#terms').exists()).toBe(true)
        })
        test('form submit button is disabled by default', () => {
            expect(wrapper.find('.btn__submit:disabled').exists()).toBe(true)
        })

        test('button is enabled when inputs are filled and event is emitted on click', async () => {
            const usernameInput = wrapper.find('#username')
            await usernameInput.setValue('Username')
            const emailInput = wrapper.find('#email')
            await emailInput.setValue('sample@gmail.com')
            const termsInput = wrapper.find('#terms')
            await termsInput.setChecked()
            expect(wrapper.find('.btn__submit:disabled').exists()).toBe(false)
            wrapper.vm.onSubmit()
            expect(wrapper.emitted()).toHaveProperty('submitted')
            const submitEvent = wrapper.emitted('submitted')
            expect(submitEvent[0]).toEqual(['Username'])
        })
    })
})
