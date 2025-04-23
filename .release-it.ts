import { defineReleaseItConfig } from '@gabortorma/mwm'
import { name } from './package.json'

export default defineReleaseItConfig('nuxt-module', name.split('/').pop())
