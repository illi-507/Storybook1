import React from 'react'
import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input
}

export const Small = () => <Input sIze='small' placeholder='Small size' />
export const Medium = () => <Input sIze='medium' placeholder='Medium size' />
export const Large = () => <Input sIze='large' placeholder='Large size' />

//Small.storyName ="Small Input";