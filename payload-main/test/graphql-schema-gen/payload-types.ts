/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type SharedMetaArray = {
  title?: string
  description?: string
  id?: string
}[]

export interface Config {
  collections: {
    collection1: Collection1
    collection2: Collection2
    users: User
  }
  globals: {}
}
export interface Collection1 {
  id: string
  testing: string
  title: string
  meta?: SharedMetaArray
  blocks: (SharedMetaBlock | AnotherSharedBlock)[]
  updatedAt: string
  createdAt: string
}
export interface SharedMetaBlock {
  b1title: string
  b1description?: string
  id?: string
  blockName?: string
  blockType: 'block1'
}
export interface AnotherSharedBlock {
  b2title: string
  b2description?: string
  id?: string
  blockName?: string
  blockType: 'block2'
}
export interface Collection2 {
  id: string
  meta?: SharedMeta
  nestedGroup?: {
    meta?: SharedMeta
  }
  updatedAt: string
  createdAt: string
}
export interface SharedMeta {
  title?: string
  description?: string
}
export interface User {
  id: string
  updatedAt: string
  createdAt: string
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  loginAttempts?: number
  lockUntil?: string
  password?: string
}
