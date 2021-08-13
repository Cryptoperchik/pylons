/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { GooglIAPOrder } from '../pylons/googl_iap_order'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Execution } from '../pylons/execution'
import { Recipe } from '../pylons/recipe'
import { Item } from '../pylons/item'
import { Cookbook } from '../pylons/cookbook'

export const protobufPackage = 'Pylonstech.pylons.pylons'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetGooglIAPOrderRequest {
  id: number
}

export interface QueryGetGooglIAPOrderResponse {
  GooglIAPOrder: GooglIAPOrder | undefined
}

export interface QueryAllGooglIAPOrderRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllGooglIAPOrderResponse {
  GooglIAPOrder: GooglIAPOrder[]
  pagination: PageResponse | undefined
}

export interface QueryListExecutionsByItemRequest {
  CookbookID: string
  ItemID: string
}

export interface QueryListExecutionsByItemResponse {
  Executions: Execution[]
}

export interface QueryListExecutionsByRecipeRequest {
  CookbookID: string
  RecipeID: string
}

export interface QueryListExecutionsByRecipeResponse {
  Executions: Execution[]
}

export interface QueryGetExecutionRequest {
  ID: string
}

export interface QueryGetExecutionResponse {
  Execution: Execution | undefined
  Completed: boolean
}

export interface QueryListRecipesByCookbookRequest {
  CookbookID: string
}

export interface QueryListRecipesByCookbookResponse {
  Recipes: Recipe[]
}

export interface QueryGetItemRequest {
  CookbookID: string
  ID: string
}

export interface QueryGetItemResponse {
  Item: Item | undefined
}

export interface QueryAllItemRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllItemResponse {
  Item: Item[]
  pagination: PageResponse | undefined
}

export interface QueryGetRecipeRequest {
  CookbookID: string
  ID: string
}

export interface QueryGetRecipeResponse {
  Recipe: Recipe | undefined
}

export interface QueryListCookbooksByCreatorRequest {
  creator: string
}

export interface QueryListCookbooksByCreatorResponse {
  Cookbooks: Cookbook[]
}

export interface QueryGetCookbookRequest {
  ID: string
}

export interface QueryGetCookbookResponse {
  Cookbook: Cookbook | undefined
}

const baseQueryGetGooglIAPOrderRequest: object = { id: 0 }

export const QueryGetGooglIAPOrderRequest = {
  encode(message: QueryGetGooglIAPOrderRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGooglIAPOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetGooglIAPOrderRequest } as QueryGetGooglIAPOrderRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetGooglIAPOrderRequest {
    const message = { ...baseQueryGetGooglIAPOrderRequest } as QueryGetGooglIAPOrderRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetGooglIAPOrderRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetGooglIAPOrderRequest>): QueryGetGooglIAPOrderRequest {
    const message = { ...baseQueryGetGooglIAPOrderRequest } as QueryGetGooglIAPOrderRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetGooglIAPOrderResponse: object = {}

export const QueryGetGooglIAPOrderResponse = {
  encode(message: QueryGetGooglIAPOrderResponse, writer: Writer = Writer.create()): Writer {
    if (message.GooglIAPOrder !== undefined) {
      GooglIAPOrder.encode(message.GooglIAPOrder, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetGooglIAPOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetGooglIAPOrderResponse } as QueryGetGooglIAPOrderResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.GooglIAPOrder = GooglIAPOrder.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetGooglIAPOrderResponse {
    const message = { ...baseQueryGetGooglIAPOrderResponse } as QueryGetGooglIAPOrderResponse
    if (object.GooglIAPOrder !== undefined && object.GooglIAPOrder !== null) {
      message.GooglIAPOrder = GooglIAPOrder.fromJSON(object.GooglIAPOrder)
    } else {
      message.GooglIAPOrder = undefined
    }
    return message
  },

  toJSON(message: QueryGetGooglIAPOrderResponse): unknown {
    const obj: any = {}
    message.GooglIAPOrder !== undefined && (obj.GooglIAPOrder = message.GooglIAPOrder ? GooglIAPOrder.toJSON(message.GooglIAPOrder) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetGooglIAPOrderResponse>): QueryGetGooglIAPOrderResponse {
    const message = { ...baseQueryGetGooglIAPOrderResponse } as QueryGetGooglIAPOrderResponse
    if (object.GooglIAPOrder !== undefined && object.GooglIAPOrder !== null) {
      message.GooglIAPOrder = GooglIAPOrder.fromPartial(object.GooglIAPOrder)
    } else {
      message.GooglIAPOrder = undefined
    }
    return message
  }
}

const baseQueryAllGooglIAPOrderRequest: object = {}

export const QueryAllGooglIAPOrderRequest = {
  encode(message: QueryAllGooglIAPOrderRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGooglIAPOrderRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllGooglIAPOrderRequest } as QueryAllGooglIAPOrderRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllGooglIAPOrderRequest {
    const message = { ...baseQueryAllGooglIAPOrderRequest } as QueryAllGooglIAPOrderRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllGooglIAPOrderRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllGooglIAPOrderRequest>): QueryAllGooglIAPOrderRequest {
    const message = { ...baseQueryAllGooglIAPOrderRequest } as QueryAllGooglIAPOrderRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllGooglIAPOrderResponse: object = {}

export const QueryAllGooglIAPOrderResponse = {
  encode(message: QueryAllGooglIAPOrderResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.GooglIAPOrder) {
      GooglIAPOrder.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllGooglIAPOrderResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllGooglIAPOrderResponse } as QueryAllGooglIAPOrderResponse
    message.GooglIAPOrder = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.GooglIAPOrder.push(GooglIAPOrder.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllGooglIAPOrderResponse {
    const message = { ...baseQueryAllGooglIAPOrderResponse } as QueryAllGooglIAPOrderResponse
    message.GooglIAPOrder = []
    if (object.GooglIAPOrder !== undefined && object.GooglIAPOrder !== null) {
      for (const e of object.GooglIAPOrder) {
        message.GooglIAPOrder.push(GooglIAPOrder.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllGooglIAPOrderResponse): unknown {
    const obj: any = {}
    if (message.GooglIAPOrder) {
      obj.GooglIAPOrder = message.GooglIAPOrder.map((e) => (e ? GooglIAPOrder.toJSON(e) : undefined))
    } else {
      obj.GooglIAPOrder = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllGooglIAPOrderResponse>): QueryAllGooglIAPOrderResponse {
    const message = { ...baseQueryAllGooglIAPOrderResponse } as QueryAllGooglIAPOrderResponse
    message.GooglIAPOrder = []
    if (object.GooglIAPOrder !== undefined && object.GooglIAPOrder !== null) {
      for (const e of object.GooglIAPOrder) {
        message.GooglIAPOrder.push(GooglIAPOrder.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryListExecutionsByItemRequest: object = { CookbookID: '', ItemID: '' }

export const QueryListExecutionsByItemRequest = {
  encode(message: QueryListExecutionsByItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    if (message.ItemID !== '') {
      writer.uint32(18).string(message.ItemID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListExecutionsByItemRequest } as QueryListExecutionsByItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        case 2:
          message.ItemID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListExecutionsByItemRequest {
    const message = { ...baseQueryListExecutionsByItemRequest } as QueryListExecutionsByItemRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    if (object.ItemID !== undefined && object.ItemID !== null) {
      message.ItemID = String(object.ItemID)
    } else {
      message.ItemID = ''
    }
    return message
  },

  toJSON(message: QueryListExecutionsByItemRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    message.ItemID !== undefined && (obj.ItemID = message.ItemID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByItemRequest>): QueryListExecutionsByItemRequest {
    const message = { ...baseQueryListExecutionsByItemRequest } as QueryListExecutionsByItemRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    if (object.ItemID !== undefined && object.ItemID !== null) {
      message.ItemID = object.ItemID
    } else {
      message.ItemID = ''
    }
    return message
  }
}

const baseQueryListExecutionsByItemResponse: object = {}

export const QueryListExecutionsByItemResponse = {
  encode(message: QueryListExecutionsByItemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Executions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListExecutionsByItemResponse } as QueryListExecutionsByItemResponse
    message.Executions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Executions.push(Execution.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListExecutionsByItemResponse {
    const message = { ...baseQueryListExecutionsByItemResponse } as QueryListExecutionsByItemResponse
    message.Executions = []
    if (object.Executions !== undefined && object.Executions !== null) {
      for (const e of object.Executions) {
        message.Executions.push(Execution.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryListExecutionsByItemResponse): unknown {
    const obj: any = {}
    if (message.Executions) {
      obj.Executions = message.Executions.map((e) => (e ? Execution.toJSON(e) : undefined))
    } else {
      obj.Executions = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByItemResponse>): QueryListExecutionsByItemResponse {
    const message = { ...baseQueryListExecutionsByItemResponse } as QueryListExecutionsByItemResponse
    message.Executions = []
    if (object.Executions !== undefined && object.Executions !== null) {
      for (const e of object.Executions) {
        message.Executions.push(Execution.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryListExecutionsByRecipeRequest: object = { CookbookID: '', RecipeID: '' }

export const QueryListExecutionsByRecipeRequest = {
  encode(message: QueryListExecutionsByRecipeRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    if (message.RecipeID !== '') {
      writer.uint32(18).string(message.RecipeID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListExecutionsByRecipeRequest } as QueryListExecutionsByRecipeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        case 2:
          message.RecipeID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListExecutionsByRecipeRequest {
    const message = { ...baseQueryListExecutionsByRecipeRequest } as QueryListExecutionsByRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    if (object.RecipeID !== undefined && object.RecipeID !== null) {
      message.RecipeID = String(object.RecipeID)
    } else {
      message.RecipeID = ''
    }
    return message
  },

  toJSON(message: QueryListExecutionsByRecipeRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    message.RecipeID !== undefined && (obj.RecipeID = message.RecipeID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByRecipeRequest>): QueryListExecutionsByRecipeRequest {
    const message = { ...baseQueryListExecutionsByRecipeRequest } as QueryListExecutionsByRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    if (object.RecipeID !== undefined && object.RecipeID !== null) {
      message.RecipeID = object.RecipeID
    } else {
      message.RecipeID = ''
    }
    return message
  }
}

const baseQueryListExecutionsByRecipeResponse: object = {}

export const QueryListExecutionsByRecipeResponse = {
  encode(message: QueryListExecutionsByRecipeResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Executions) {
      Execution.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListExecutionsByRecipeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListExecutionsByRecipeResponse } as QueryListExecutionsByRecipeResponse
    message.Executions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Executions.push(Execution.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListExecutionsByRecipeResponse {
    const message = { ...baseQueryListExecutionsByRecipeResponse } as QueryListExecutionsByRecipeResponse
    message.Executions = []
    if (object.Executions !== undefined && object.Executions !== null) {
      for (const e of object.Executions) {
        message.Executions.push(Execution.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryListExecutionsByRecipeResponse): unknown {
    const obj: any = {}
    if (message.Executions) {
      obj.Executions = message.Executions.map((e) => (e ? Execution.toJSON(e) : undefined))
    } else {
      obj.Executions = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryListExecutionsByRecipeResponse>): QueryListExecutionsByRecipeResponse {
    const message = { ...baseQueryListExecutionsByRecipeResponse } as QueryListExecutionsByRecipeResponse
    message.Executions = []
    if (object.Executions !== undefined && object.Executions !== null) {
      for (const e of object.Executions) {
        message.Executions.push(Execution.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryGetExecutionRequest: object = { ID: '' }

export const QueryGetExecutionRequest = {
  encode(message: QueryGetExecutionRequest, writer: Writer = Writer.create()): Writer {
    if (message.ID !== '') {
      writer.uint32(10).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetExecutionRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetExecutionRequest } as QueryGetExecutionRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetExecutionRequest {
    const message = { ...baseQueryGetExecutionRequest } as QueryGetExecutionRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetExecutionRequest): unknown {
    const obj: any = {}
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetExecutionRequest>): QueryGetExecutionRequest {
    const message = { ...baseQueryGetExecutionRequest } as QueryGetExecutionRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetExecutionResponse: object = { Completed: false }

export const QueryGetExecutionResponse = {
  encode(message: QueryGetExecutionResponse, writer: Writer = Writer.create()): Writer {
    if (message.Execution !== undefined) {
      Execution.encode(message.Execution, writer.uint32(10).fork()).ldelim()
    }
    if (message.Completed === true) {
      writer.uint32(16).bool(message.Completed)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetExecutionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetExecutionResponse } as QueryGetExecutionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Execution = Execution.decode(reader, reader.uint32())
          break
        case 2:
          message.Completed = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetExecutionResponse {
    const message = { ...baseQueryGetExecutionResponse } as QueryGetExecutionResponse
    if (object.Execution !== undefined && object.Execution !== null) {
      message.Execution = Execution.fromJSON(object.Execution)
    } else {
      message.Execution = undefined
    }
    if (object.Completed !== undefined && object.Completed !== null) {
      message.Completed = Boolean(object.Completed)
    } else {
      message.Completed = false
    }
    return message
  },

  toJSON(message: QueryGetExecutionResponse): unknown {
    const obj: any = {}
    message.Execution !== undefined && (obj.Execution = message.Execution ? Execution.toJSON(message.Execution) : undefined)
    message.Completed !== undefined && (obj.Completed = message.Completed)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetExecutionResponse>): QueryGetExecutionResponse {
    const message = { ...baseQueryGetExecutionResponse } as QueryGetExecutionResponse
    if (object.Execution !== undefined && object.Execution !== null) {
      message.Execution = Execution.fromPartial(object.Execution)
    } else {
      message.Execution = undefined
    }
    if (object.Completed !== undefined && object.Completed !== null) {
      message.Completed = object.Completed
    } else {
      message.Completed = false
    }
    return message
  }
}

const baseQueryListRecipesByCookbookRequest: object = { CookbookID: '' }

export const QueryListRecipesByCookbookRequest = {
  encode(message: QueryListRecipesByCookbookRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListRecipesByCookbookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListRecipesByCookbookRequest } as QueryListRecipesByCookbookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListRecipesByCookbookRequest {
    const message = { ...baseQueryListRecipesByCookbookRequest } as QueryListRecipesByCookbookRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    return message
  },

  toJSON(message: QueryListRecipesByCookbookRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryListRecipesByCookbookRequest>): QueryListRecipesByCookbookRequest {
    const message = { ...baseQueryListRecipesByCookbookRequest } as QueryListRecipesByCookbookRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    return message
  }
}

const baseQueryListRecipesByCookbookResponse: object = {}

export const QueryListRecipesByCookbookResponse = {
  encode(message: QueryListRecipesByCookbookResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Recipes) {
      Recipe.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListRecipesByCookbookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListRecipesByCookbookResponse } as QueryListRecipesByCookbookResponse
    message.Recipes = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Recipes.push(Recipe.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListRecipesByCookbookResponse {
    const message = { ...baseQueryListRecipesByCookbookResponse } as QueryListRecipesByCookbookResponse
    message.Recipes = []
    if (object.Recipes !== undefined && object.Recipes !== null) {
      for (const e of object.Recipes) {
        message.Recipes.push(Recipe.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryListRecipesByCookbookResponse): unknown {
    const obj: any = {}
    if (message.Recipes) {
      obj.Recipes = message.Recipes.map((e) => (e ? Recipe.toJSON(e) : undefined))
    } else {
      obj.Recipes = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryListRecipesByCookbookResponse>): QueryListRecipesByCookbookResponse {
    const message = { ...baseQueryListRecipesByCookbookResponse } as QueryListRecipesByCookbookResponse
    message.Recipes = []
    if (object.Recipes !== undefined && object.Recipes !== null) {
      for (const e of object.Recipes) {
        message.Recipes.push(Recipe.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryGetItemRequest: object = { CookbookID: '', ID: '' }

export const QueryGetItemRequest = {
  encode(message: QueryGetItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    if (message.ID !== '') {
      writer.uint32(26).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        case 3:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetItemRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemRequest>): QueryGetItemRequest {
    const message = { ...baseQueryGetItemRequest } as QueryGetItemRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetItemResponse: object = {}

export const QueryGetItemResponse = {
  encode(message: QueryGetItemResponse, writer: Writer = Writer.create()): Writer {
    if (message.Item !== undefined) {
      Item.encode(message.Item, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item = Item.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromJSON(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  },

  toJSON(message: QueryGetItemResponse): unknown {
    const obj: any = {}
    message.Item !== undefined && (obj.Item = message.Item ? Item.toJSON(message.Item) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetItemResponse>): QueryGetItemResponse {
    const message = { ...baseQueryGetItemResponse } as QueryGetItemResponse
    if (object.Item !== undefined && object.Item !== null) {
      message.Item = Item.fromPartial(object.Item)
    } else {
      message.Item = undefined
    }
    return message
  }
}

const baseQueryAllItemRequest: object = {}

export const QueryAllItemRequest = {
  encode(message: QueryAllItemRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemRequest>): QueryAllItemRequest {
    const message = { ...baseQueryAllItemRequest } as QueryAllItemRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllItemResponse: object = {}

export const QueryAllItemResponse = {
  encode(message: QueryAllItemResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Item) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllItemResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Item.push(Item.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllItemResponse): unknown {
    const obj: any = {}
    if (message.Item) {
      obj.Item = message.Item.map((e) => (e ? Item.toJSON(e) : undefined))
    } else {
      obj.Item = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllItemResponse>): QueryAllItemResponse {
    const message = { ...baseQueryAllItemResponse } as QueryAllItemResponse
    message.Item = []
    if (object.Item !== undefined && object.Item !== null) {
      for (const e of object.Item) {
        message.Item.push(Item.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetRecipeRequest: object = { CookbookID: '', ID: '' }

export const QueryGetRecipeRequest = {
  encode(message: QueryGetRecipeRequest, writer: Writer = Writer.create()): Writer {
    if (message.CookbookID !== '') {
      writer.uint32(10).string(message.CookbookID)
    }
    if (message.ID !== '') {
      writer.uint32(18).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CookbookID = reader.string()
          break
        case 2:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRecipeRequest {
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = String(object.CookbookID)
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetRecipeRequest): unknown {
    const obj: any = {}
    message.CookbookID !== undefined && (obj.CookbookID = message.CookbookID)
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRecipeRequest>): QueryGetRecipeRequest {
    const message = { ...baseQueryGetRecipeRequest } as QueryGetRecipeRequest
    if (object.CookbookID !== undefined && object.CookbookID !== null) {
      message.CookbookID = object.CookbookID
    } else {
      message.CookbookID = ''
    }
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetRecipeResponse: object = {}

export const QueryGetRecipeResponse = {
  encode(message: QueryGetRecipeResponse, writer: Writer = Writer.create()): Writer {
    if (message.Recipe !== undefined) {
      Recipe.encode(message.Recipe, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRecipeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Recipe = Recipe.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRecipeResponse {
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    if (object.Recipe !== undefined && object.Recipe !== null) {
      message.Recipe = Recipe.fromJSON(object.Recipe)
    } else {
      message.Recipe = undefined
    }
    return message
  },

  toJSON(message: QueryGetRecipeResponse): unknown {
    const obj: any = {}
    message.Recipe !== undefined && (obj.Recipe = message.Recipe ? Recipe.toJSON(message.Recipe) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRecipeResponse>): QueryGetRecipeResponse {
    const message = { ...baseQueryGetRecipeResponse } as QueryGetRecipeResponse
    if (object.Recipe !== undefined && object.Recipe !== null) {
      message.Recipe = Recipe.fromPartial(object.Recipe)
    } else {
      message.Recipe = undefined
    }
    return message
  }
}

const baseQueryListCookbooksByCreatorRequest: object = { creator: '' }

export const QueryListCookbooksByCreatorRequest = {
  encode(message: QueryListCookbooksByCreatorRequest, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListCookbooksByCreatorRequest {
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: QueryListCookbooksByCreatorRequest): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorRequest>): QueryListCookbooksByCreatorRequest {
    const message = { ...baseQueryListCookbooksByCreatorRequest } as QueryListCookbooksByCreatorRequest
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseQueryListCookbooksByCreatorResponse: object = {}

export const QueryListCookbooksByCreatorResponse = {
  encode(message: QueryListCookbooksByCreatorResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Cookbooks) {
      Cookbook.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryListCookbooksByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cookbooks.push(Cookbook.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryListCookbooksByCreatorResponse {
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    if (object.Cookbooks !== undefined && object.Cookbooks !== null) {
      for (const e of object.Cookbooks) {
        message.Cookbooks.push(Cookbook.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryListCookbooksByCreatorResponse): unknown {
    const obj: any = {}
    if (message.Cookbooks) {
      obj.Cookbooks = message.Cookbooks.map((e) => (e ? Cookbook.toJSON(e) : undefined))
    } else {
      obj.Cookbooks = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryListCookbooksByCreatorResponse>): QueryListCookbooksByCreatorResponse {
    const message = { ...baseQueryListCookbooksByCreatorResponse } as QueryListCookbooksByCreatorResponse
    message.Cookbooks = []
    if (object.Cookbooks !== undefined && object.Cookbooks !== null) {
      for (const e of object.Cookbooks) {
        message.Cookbooks.push(Cookbook.fromPartial(e))
      }
    }
    return message
  }
}

const baseQueryGetCookbookRequest: object = { ID: '' }

export const QueryGetCookbookRequest = {
  encode(message: QueryGetCookbookRequest, writer: Writer = Writer.create()): Writer {
    if (message.ID !== '') {
      writer.uint32(10).string(message.ID)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ID = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCookbookRequest {
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = String(object.ID)
    } else {
      message.ID = ''
    }
    return message
  },

  toJSON(message: QueryGetCookbookRequest): unknown {
    const obj: any = {}
    message.ID !== undefined && (obj.ID = message.ID)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCookbookRequest>): QueryGetCookbookRequest {
    const message = { ...baseQueryGetCookbookRequest } as QueryGetCookbookRequest
    if (object.ID !== undefined && object.ID !== null) {
      message.ID = object.ID
    } else {
      message.ID = ''
    }
    return message
  }
}

const baseQueryGetCookbookResponse: object = {}

export const QueryGetCookbookResponse = {
  encode(message: QueryGetCookbookResponse, writer: Writer = Writer.create()): Writer {
    if (message.Cookbook !== undefined) {
      Cookbook.encode(message.Cookbook, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCookbookResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Cookbook = Cookbook.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCookbookResponse {
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    if (object.Cookbook !== undefined && object.Cookbook !== null) {
      message.Cookbook = Cookbook.fromJSON(object.Cookbook)
    } else {
      message.Cookbook = undefined
    }
    return message
  },

  toJSON(message: QueryGetCookbookResponse): unknown {
    const obj: any = {}
    message.Cookbook !== undefined && (obj.Cookbook = message.Cookbook ? Cookbook.toJSON(message.Cookbook) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCookbookResponse>): QueryGetCookbookResponse {
    const message = { ...baseQueryGetCookbookResponse } as QueryGetCookbookResponse
    if (object.Cookbook !== undefined && object.Cookbook !== null) {
      message.Cookbook = Cookbook.fromPartial(object.Cookbook)
    } else {
      message.Cookbook = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a googlIAPOrder by id. */
  GooglIAPOrder(request: QueryGetGooglIAPOrderRequest): Promise<QueryGetGooglIAPOrderResponse>
  /** Queries a list of googlIAPOrder items. */
  GooglIAPOrderAll(request: QueryAllGooglIAPOrderRequest): Promise<QueryAllGooglIAPOrderResponse>
  /** Queries a list of listExecutionsByItem items. */
  ListExecutionsByItem(request: QueryListExecutionsByItemRequest): Promise<QueryListExecutionsByItemResponse>
  /** Queries a list of listExecutionsByRecipe items. */
  ListExecutionsByRecipe(request: QueryListExecutionsByRecipeRequest): Promise<QueryListExecutionsByRecipeResponse>
  /** Queries a execution by id. */
  Execution(request: QueryGetExecutionRequest): Promise<QueryGetExecutionResponse>
  /** Queries a list of listRecipesByCookbook items. */
  ListRecipesByCookbook(request: QueryListRecipesByCookbookRequest): Promise<QueryListRecipesByCookbookResponse>
  /** Queries a item by ID. */
  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse>
  /** Retrieves a recipe by ID. */
  Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse>
  /** Retrieves the list of cookbooks owned by an address */
  ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse>
  /** Retrieves a cookbook by ID. */
  Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GooglIAPOrder(request: QueryGetGooglIAPOrderRequest): Promise<QueryGetGooglIAPOrderResponse> {
    const data = QueryGetGooglIAPOrderRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'GooglIAPOrder', data)
    return promise.then((data) => QueryGetGooglIAPOrderResponse.decode(new Reader(data)))
  }

  GooglIAPOrderAll(request: QueryAllGooglIAPOrderRequest): Promise<QueryAllGooglIAPOrderResponse> {
    const data = QueryAllGooglIAPOrderRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'GooglIAPOrderAll', data)
    return promise.then((data) => QueryAllGooglIAPOrderResponse.decode(new Reader(data)))
  }

  ListExecutionsByItem(request: QueryListExecutionsByItemRequest): Promise<QueryListExecutionsByItemResponse> {
    const data = QueryListExecutionsByItemRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ListExecutionsByItem', data)
    return promise.then((data) => QueryListExecutionsByItemResponse.decode(new Reader(data)))
  }

  ListExecutionsByRecipe(request: QueryListExecutionsByRecipeRequest): Promise<QueryListExecutionsByRecipeResponse> {
    const data = QueryListExecutionsByRecipeRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ListExecutionsByRecipe', data)
    return promise.then((data) => QueryListExecutionsByRecipeResponse.decode(new Reader(data)))
  }

  Execution(request: QueryGetExecutionRequest): Promise<QueryGetExecutionResponse> {
    const data = QueryGetExecutionRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Execution', data)
    return promise.then((data) => QueryGetExecutionResponse.decode(new Reader(data)))
  }

  ListRecipesByCookbook(request: QueryListRecipesByCookbookRequest): Promise<QueryListRecipesByCookbookResponse> {
    const data = QueryListRecipesByCookbookRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ListRecipesByCookbook', data)
    return promise.then((data) => QueryListRecipesByCookbookResponse.decode(new Reader(data)))
  }

  Item(request: QueryGetItemRequest): Promise<QueryGetItemResponse> {
    const data = QueryGetItemRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Item', data)
    return promise.then((data) => QueryGetItemResponse.decode(new Reader(data)))
  }

  Recipe(request: QueryGetRecipeRequest): Promise<QueryGetRecipeResponse> {
    const data = QueryGetRecipeRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Recipe', data)
    return promise.then((data) => QueryGetRecipeResponse.decode(new Reader(data)))
  }

  ListCookbooksByCreator(request: QueryListCookbooksByCreatorRequest): Promise<QueryListCookbooksByCreatorResponse> {
    const data = QueryListCookbooksByCreatorRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'ListCookbooksByCreator', data)
    return promise.then((data) => QueryListCookbooksByCreatorResponse.decode(new Reader(data)))
  }

  Cookbook(request: QueryGetCookbookRequest): Promise<QueryGetCookbookResponse> {
    const data = QueryGetCookbookRequest.encode(request).finish()
    const promise = this.rpc.request('Pylonstech.pylons.pylons.Query', 'Cookbook', data)
    return promise.then((data) => QueryGetCookbookResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
