export { default as AvatarColorPicker } from '../../components/signup/AvatarColorPicker.vue'
export { default as SignupHeader } from '../../components/signup/SignupHeader.vue'
export { default as Avatar } from '../../components/avatar/Avatar.vue'
export { default as InputField } from '../../components/common/InputField.vue'

export const LazyAvatarColorPicker = import('../../components/signup/AvatarColorPicker.vue' /* webpackChunkName: "components/avatar-color-picker" */).then(c => c.default || c)
export const LazySignupHeader = import('../../components/signup/SignupHeader.vue' /* webpackChunkName: "components/signup-header" */).then(c => c.default || c)
export const LazyAvatar = import('../../components/avatar/Avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => c.default || c)
export const LazyInputField = import('../../components/common/InputField.vue' /* webpackChunkName: "components/input-field" */).then(c => c.default || c)
