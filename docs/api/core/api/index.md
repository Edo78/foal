# Table of contents

* [index.ts][SourceFile-0]
    * Functions
        * [logIn][FunctionDeclaration-0]
        * [logOut][FunctionDeclaration-1]
        * [parsePassword][FunctionDeclaration-2]
        * [LoginOptional][FunctionDeclaration-3]
        * [LoginRequired][FunctionDeclaration-4]
        * [isObjectDoesNotExist][FunctionDeclaration-5]
        * [isPermissionDenied][FunctionDeclaration-6]
        * [isValidationError][FunctionDeclaration-7]
        * [Log][FunctionDeclaration-8]
        * [ValidateBody][FunctionDeclaration-9]
        * [ValidateHeaders][FunctionDeclaration-10]
        * [ValidateParams][FunctionDeclaration-11]
        * [ValidateQuery][FunctionDeclaration-12]
        * [strategy][FunctionDeclaration-13]
        * [controller][FunctionDeclaration-14]
        * [escapeProp][FunctionDeclaration-15]
        * [escape][FunctionDeclaration-16]
        * [getAjvInstance][FunctionDeclaration-17]
        * [isInFile][FunctionDeclaration-18]
        * [render][FunctionDeclaration-19]
        * [validate][FunctionDeclaration-20]
        * [Head][FunctionDeclaration-21]
        * [Options][FunctionDeclaration-22]
        * [Get][FunctionDeclaration-23]
        * [Post][FunctionDeclaration-24]
        * [Put][FunctionDeclaration-25]
        * [Patch][FunctionDeclaration-26]
        * [Delete][FunctionDeclaration-27]
        * [isHttpResponse][FunctionDeclaration-28]
        * [isHttpResponseSuccess][FunctionDeclaration-29]
        * [isHttpResponseOK][FunctionDeclaration-30]
        * [isHttpResponseCreated][FunctionDeclaration-31]
        * [isHttpResponseNoContent][FunctionDeclaration-32]
        * [isHttpResponseRedirection][FunctionDeclaration-33]
        * [isHttpResponseRedirect][FunctionDeclaration-34]
        * [isHttpResponseClientError][FunctionDeclaration-35]
        * [isHttpResponseBadRequest][FunctionDeclaration-36]
        * [isHttpResponseUnauthorized][FunctionDeclaration-37]
        * [isHttpResponseForbidden][FunctionDeclaration-38]
        * [isHttpResponseNotFound][FunctionDeclaration-39]
        * [isHttpResponseMethodNotAllowed][FunctionDeclaration-40]
        * [isHttpResponseConflict][FunctionDeclaration-41]
        * [isHttpResponseServerError][FunctionDeclaration-42]
        * [isHttpResponseInternalServerError][FunctionDeclaration-43]
        * [isHttpResponseNotImplemented][FunctionDeclaration-44]
        * [Hook][FunctionDeclaration-45]
        * [getHookFunction][FunctionDeclaration-46]
        * [makeControllerRoutes][FunctionDeclaration-47]
        * [getPath][FunctionDeclaration-48]
        * [getHttpMethod][FunctionDeclaration-49]
        * [createController][FunctionDeclaration-50]
        * [createService][FunctionDeclaration-51]
        * [dependency][FunctionDeclaration-52]
        * [createApp][FunctionDeclaration-53]
    * Interfaces
        * [LogOptions][InterfaceDeclaration-0]
        * [IAuthenticator][InterfaceDeclaration-1]
        * [Strategy][InterfaceDeclaration-2]
        * [IResourceCollection][InterfaceDeclaration-4]
        * [CollectionParams][InterfaceDeclaration-5]
        * [CookieOptions][InterfaceDeclaration-3]
        * [Route][InterfaceDeclaration-6]
        * [CreateAppOptions][InterfaceDeclaration-7]
    * Types
        * [Class][TypeAliasDeclaration-1]
        * [HttpMethod][TypeAliasDeclaration-2]
        * [HookPostFunction][TypeAliasDeclaration-4]
        * [HookFunction][TypeAliasDeclaration-3]
        * [HookDecorator][TypeAliasDeclaration-0]

# index.ts

## Functions

### logIn

```typescript
function logIn(ctx: Context<any>, user: object, idKey: string = 'id'): void;
```

**Parameters**

| Name  | Type                               | Default value |
| ----- | ---------------------------------- | ------------- |
| ctx   | [Context][ClassDeclaration-0]<any> |               |
| user  | object                             |               |
| idKey | string                             | 'id'          |

**Return type**

void

----------

### logOut

```typescript
function logOut(ctx: Context<any>): void;
```

**Parameters**

| Name | Type                               |
| ---- | ---------------------------------- |
| ctx  | [Context][ClassDeclaration-0]<any> |

**Return type**

void

----------

### parsePassword

```typescript
function parsePassword(password: string): Promise<string>;
```

**Parameters**

| Name     | Type   |
| -------- | ------ |
| password | string |

**Return type**

Promise<string>

----------

### LoginOptional

```typescript
function LoginOptional(options: { user: (id: number | string) => Promise<any>; }): HookDecorator;
```

**Parameters**

| Name    | Type                                                  |
| ------- | ----------------------------------------------------- |
| options | { user: (id: number &#124; string) => Promise<any>; } |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### LoginRequired

```typescript
function LoginRequired(options: { redirect?: string | undefined; user: (id: number | string) => Promise<any>; }): HookDecorator;
```

**Parameters**

| Name    | Type                                                                                      |
| ------- | ----------------------------------------------------------------------------------------- |
| options | { redirect?: string &#124; undefined; user: (id: number &#124; string) => Promise<any>; } |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### isObjectDoesNotExist

```typescript
function isObjectDoesNotExist(err: object): err is ObjectDoesNotExist;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| err  | object |

**Return type**

err is [ObjectDoesNotExist][ClassDeclaration-1]

----------

### isPermissionDenied

```typescript
function isPermissionDenied(err: object): err is PermissionDenied;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| err  | object |

**Return type**

err is [PermissionDenied][ClassDeclaration-2]

----------

### isValidationError

```typescript
function isValidationError(err: object): err is ValidationError;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| err  | object |

**Return type**

err is [ValidationError][ClassDeclaration-3]

----------

### Log

Logs a message with optional information on the HTTP request.

```typescript
function Log(message: string, options: LogOptions = {}): HookDecorator;
```

**Parameters**

| Name    | Type                                 | Default value | Description                                                                 |
| ------- | ------------------------------------ | ------------- | --------------------------------------------------------------------------- |
| message | string                               |               | The message to print.                                                       |
| options | [LogOptions][InterfaceDeclaration-0] | {}            | Options to specify which information on the HTTP request should be printed. |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### ValidateBody

Hook to validate the body of the request.

```typescript
function ValidateBody(schema: object): HookDecorator;
```

**Parameters**

| Name   | Type   | Description                               |
| ------ | ------ | ----------------------------------------- |
| schema | object | Schema used to validate the body request. |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### ValidateHeaders

Hook to validate the headers of the request.

```typescript
function ValidateHeaders(schema: object): HookDecorator;
```

**Parameters**

| Name   | Type   | Description                                  |
| ------ | ------ | -------------------------------------------- |
| schema | object | Schema used to validate the headers request. |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### ValidateParams

Hook to validate the params of the request.

```typescript
function ValidateParams(schema: object): HookDecorator;
```

**Parameters**

| Name   | Type   | Description                                 |
| ------ | ------ | ------------------------------------------- |
| schema | object | Schema used to validate the params request. |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### ValidateQuery

Hook to validate the query of the request.

```typescript
function ValidateQuery(schema: object): HookDecorator;
```

**Parameters**

| Name   | Type   | Description                                |
| ------ | ------ | ------------------------------------------ |
| schema | object | Schema used to validate the query request. |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### strategy

**Warning Beta!**

Deprecated!</span>

```typescript
function strategy(name: Strategy["name"], authenticatorClass: Strategy["authenticatorClass"], schema: Strategy["schema"]): Strategy;
```

**Parameters**

| Name               | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| name               | [Strategy][InterfaceDeclaration-2]["name"]               |
| authenticatorClass | [Strategy][InterfaceDeclaration-2]["authenticatorClass"] |
| schema             | [Strategy][InterfaceDeclaration-2]["schema"]             |

**Return type**

[Strategy][InterfaceDeclaration-2]

----------

### controller

```typescript
function controller(path: string, controllerClass: Class): Class;
```

**Parameters**

| Name            | Type                            |
| --------------- | ------------------------------- |
| path            | string                          |
| controllerClass | [Class][TypeAliasDeclaration-1] |

**Return type**

[Class][TypeAliasDeclaration-1]

----------

### escapeProp

```typescript
function escapeProp(object: object, propName: string): void;
```

**Parameters**

| Name     | Type   |
| -------- | ------ |
| object   | object |
| propName | string |

**Return type**

void

----------

### escape

```typescript
function escape(str: string): string;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| str  | string |

**Return type**

string

----------

### getAjvInstance

```typescript
function getAjvInstance(): Ajv;
```

**Return type**

Ajv

----------

### isInFile

```typescript
function isInFile(path: string): (content: string) => Promise<boolean>;
```

**Parameters**

| Name | Type   |
| ---- | ------ |
| path | string |

**Return type**

(content: string) => Promise<boolean>

----------

### render

```typescript
function render(templatePath: string, locals: object, dirname: string): HttpResponseOK;
```

**Parameters**

| Name         | Type   |
| ------------ | ------ |
| templatePath | string |
| locals       | object |
| dirname      | string |

**Return type**

[HttpResponseOK][ClassDeclaration-19]

----------

### validate

```typescript
function validate(schema: object, data: any): void;
```

**Parameters**

| Name   | Type   |
| ------ | ------ |
| schema | object |
| data   | any    |

**Return type**

void

----------

### Head

```typescript
function Head(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Options

```typescript
function Options(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Get

```typescript
function Get(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Post

```typescript
function Post(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Put

```typescript
function Put(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Patch

```typescript
function Patch(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### Delete

```typescript
function Delete(path?: string | undefined): (target: any, propertyKey: string) => void;
```

**Parameters**

| Name | Type                    |
| ---- | ----------------------- |
| path | string &#124; undefined |

**Return type**

(target: any, propertyKey: string) => void

----------

### isHttpResponse

```typescript
function isHttpResponse(obj: any): obj is HttpResponse;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponse][ClassDeclaration-8]

----------

### isHttpResponseSuccess

```typescript
function isHttpResponseSuccess(obj: any): obj is HttpResponseSuccess;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseSuccess][ClassDeclaration-10]

----------

### isHttpResponseOK

```typescript
function isHttpResponseOK(obj: any): obj is HttpResponseOK;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseOK][ClassDeclaration-19]

----------

### isHttpResponseCreated

```typescript
function isHttpResponseCreated(obj: any): obj is HttpResponseCreated;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseCreated][ClassDeclaration-21]

----------

### isHttpResponseNoContent

```typescript
function isHttpResponseNoContent(obj: any): obj is HttpResponseNoContent;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseNoContent][ClassDeclaration-9]

----------

### isHttpResponseRedirection

```typescript
function isHttpResponseRedirection(obj: any): obj is HttpResponseRedirection;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseRedirection][ClassDeclaration-7]

----------

### isHttpResponseRedirect

```typescript
function isHttpResponseRedirect(obj: any): obj is HttpResponseRedirect;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseRedirect][ClassDeclaration-6]

----------

### isHttpResponseClientError

```typescript
function isHttpResponseClientError(obj: any): obj is HttpResponseClientError;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseClientError][ClassDeclaration-12]

----------

### isHttpResponseBadRequest

```typescript
function isHttpResponseBadRequest(obj: any): obj is HttpResponseBadRequest;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseBadRequest][ClassDeclaration-13]

----------

### isHttpResponseUnauthorized

```typescript
function isHttpResponseUnauthorized(obj: any): obj is HttpResponseUnauthorized;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseUnauthorized][ClassDeclaration-14]

----------

### isHttpResponseForbidden

```typescript
function isHttpResponseForbidden(obj: any): obj is HttpResponseForbidden;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseForbidden][ClassDeclaration-20]

----------

### isHttpResponseNotFound

```typescript
function isHttpResponseNotFound(obj: any): obj is HttpResponseNotFound;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseNotFound][ClassDeclaration-11]

----------

### isHttpResponseMethodNotAllowed

```typescript
function isHttpResponseMethodNotAllowed(obj: any): obj is HttpResponseMethodNotAllowed;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseMethodNotAllowed][ClassDeclaration-16]

----------

### isHttpResponseConflict

```typescript
function isHttpResponseConflict(obj: any): obj is HttpResponseConflict;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseConflict][ClassDeclaration-22]

----------

### isHttpResponseServerError

```typescript
function isHttpResponseServerError(obj: any): obj is HttpResponseServerError;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseServerError][ClassDeclaration-18]

----------

### isHttpResponseInternalServerError

```typescript
function isHttpResponseInternalServerError(obj: any): obj is HttpResponseInternalServerError;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseInternalServerError][ClassDeclaration-23]

----------

### isHttpResponseNotImplemented

```typescript
function isHttpResponseNotImplemented(obj: any): obj is HttpResponseNotImplemented;
```

**Parameters**

| Name | Type |
| ---- | ---- |
| obj  | any  |

**Return type**

obj is [HttpResponseNotImplemented][ClassDeclaration-17]

----------

### Hook

```typescript
function Hook(hookFunction: HookFunction): HookDecorator;
```

**Parameters**

| Name         | Type                                   |
| ------------ | -------------------------------------- |
| hookFunction | [HookFunction][TypeAliasDeclaration-3] |

**Return type**

[HookDecorator][TypeAliasDeclaration-0]

----------

### getHookFunction

```typescript
function getHookFunction(hook: HookDecorator): HookFunction;
```

**Parameters**

| Name | Type                                    |
| ---- | --------------------------------------- |
| hook | [HookDecorator][TypeAliasDeclaration-0] |

**Return type**

[HookFunction][TypeAliasDeclaration-3]

----------

### makeControllerRoutes

```typescript
function makeControllerRoutes(parentPath: string, parentHooks: HookFunction[], controllerClass: Class, services: ServiceManager): Route[];
```

**Parameters**

| Name            | Type                                     |
| --------------- | ---------------------------------------- |
| parentPath      | string                                   |
| parentHooks     | [HookFunction][TypeAliasDeclaration-3][] |
| controllerClass | [Class][TypeAliasDeclaration-1]          |
| services        | [ServiceManager][ClassDeclaration-5]     |

**Return type**

[Route][InterfaceDeclaration-6][]

----------

### getPath

```typescript
function getPath(target: Class, propertyKey?: string | undefined): string | undefined;
```

**Parameters**

| Name        | Type                            |
| ----------- | ------------------------------- |
| target      | [Class][TypeAliasDeclaration-1] |
| propertyKey | string &#124; undefined         |

**Return type**

string | undefined

----------

### getHttpMethod

```typescript
function getHttpMethod(target: Class, propertyKey?: string | undefined): string | undefined;
```

**Parameters**

| Name        | Type                            |
| ----------- | ------------------------------- |
| target      | [Class][TypeAliasDeclaration-1] |
| propertyKey | string &#124; undefined         |

**Return type**

string | undefined

----------

### createController

```typescript
function createController<T>(controllerClass: Class<T>, dependencies?: object | ServiceManager): T;
```

**Type parameters**

| Name |
| ---- |
| T    |

**Parameters**

| Name            | Type                                               |
| --------------- | -------------------------------------------------- |
| controllerClass | [Class][TypeAliasDeclaration-1]<T>                 |
| dependencies    | object &#124; [ServiceManager][ClassDeclaration-5] |

**Return type**

T

----------

### createService

Create a new service with its dependencies.

```typescript
function createService<Service>(serviceClass: Class<Service>, dependencies?: object | ServiceManager): Service;
```

**Type parameters**

| Name    |
| ------- |
| Service |

**Parameters**

| Name         | Type                                               | Description                                                                              |
| ------------ | -------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| serviceClass | [Class][TypeAliasDeclaration-1]<Service>           | The service class.                                                                       |
| dependencies | object &#124; [ServiceManager][ClassDeclaration-5] | Either a ServiceManager or an object which key/values are the service classes/instances. |

**Return type**

Service

----------

### dependency

Decorator used to inject a service inside a controller or another service.

```typescript
function dependency(target: any, propertyKey: string): void;
```

**Parameters**

| Name        | Type   |
| ----------- | ------ |
| target      | any    |
| propertyKey | string |

**Return type**

void

----------

### [strategy][FunctionDeclaration-13]

----------

### createApp

Main function to create a node.js (express) application from the root controller.

```typescript
function createApp(rootControllerClass: Class, options: CreateAppOptions = {}, expressInstance?: any): any;
```

**Parameters**

| Name                | Type                                       | Default value | Description                                                            |
| ------------------- | ------------------------------------------ | ------------- | ---------------------------------------------------------------------- |
| rootControllerClass | [Class][TypeAliasDeclaration-1]            |               | The root controller, usually called `AppController`                    |
| options             | [CreateAppOptions][InterfaceDeclaration-7] | {}            | Optional options to specify the session store (default is MemoryStore) |
| expressInstance     | any                                        |               | Optional express instance to be used as base.                          |

**Return type**

any

## Interfaces

### LogOptions

```typescript
interface LogOptions {
    body?: boolean | undefined;
    params?: boolean | undefined;
    headers?: string[] | boolean;
    query?: boolean | undefined;
    logFn?: ((message?: any, ...optionalParams: any[]) => void) | undefined;
}
```

**Properties**

| Name    | Type                                                                 | Optional |
| ------- | -------------------------------------------------------------------- | -------- |
| body    | boolean &#124; undefined                                             | true     |
| params  | boolean &#124; undefined                                             | true     |
| headers | string[] &#124; boolean                                              | true     |
| query   | boolean &#124; undefined                                             | true     |
| logFn   | ((message?: any, ...optionalParams: any[]) => void) &#124; undefined | true     |

----------

### IAuthenticator

**Warning Beta!**

Deprecated!</span>

```typescript
interface IAuthenticator<User = any> {
    authenticate(credentials: any): User | null | Promise<User | null>;
}
```

**Type parameters**

| Name | Default |
| ---- | ------- |
| User | any     |
#### Method

```typescript
authenticate(credentials: any): User | null | Promise<User | null>;
```

**Parameters**

| Name        | Type |
| ----------- | ---- |
| credentials | any  |

**Return type**

User | null | Promise<User | null>


----------

### Strategy

**Warning Beta!**

Deprecated!</span>

```typescript
interface Strategy {
    name: string;
    authenticatorClass: Class<IAuthenticator<any>>;
    schema: object;
}
```

**Properties**

| Name               | Type                                                                           | Optional |
| ------------------ | ------------------------------------------------------------------------------ | -------- |
| name               | string                                                                         | false    |
| authenticatorClass | [Class][TypeAliasDeclaration-1]<[IAuthenticator][InterfaceDeclaration-1]<any>> | false    |
| schema             | object                                                                         | false    |

----------

### IResourceCollection

**Warning Beta!**

Deprecated!</span>

Service interface. Create, read, update or delete resources and return representations of them.

```typescript
interface IResourceCollection {
    create(user: any, data: object, params: { fields?: string[]; }): any;
    find(user: any, params: { query?: object | undefined; fields?: string[]; }): any;
    findById(user: any, id: any, params: { fields?: string[]; }): any;
    modifyById(user: any, id: any, data: object, params: { fields?: string[]; }): any;
    updateById(user: any, id: any, data: object, params: { fields?: string[]; }): any;
    deleteById(user: any, id: any, params: {}): any;
}
```
#### Method

```typescript
create(user: any, data: object, params: { fields?: string[]; }): any;
```

**Parameters**

| Name   | Type                   |
| ------ | ---------------------- |
| user   | any                    |
| data   | object                 |
| params | { fields?: string[]; } |

**Return type**

any

```typescript
find(user: any, params: { query?: object | undefined; fields?: string[]; }): any;
```

**Parameters**

| Name   | Type                                                    |
| ------ | ------------------------------------------------------- |
| user   | any                                                     |
| params | { query?: object &#124; undefined; fields?: string[]; } |

**Return type**

any

```typescript
findById(user: any, id: any, params: { fields?: string[]; }): any;
```

**Parameters**

| Name   | Type                   |
| ------ | ---------------------- |
| user   | any                    |
| id     | any                    |
| params | { fields?: string[]; } |

**Return type**

any

```typescript
modifyById(user: any, id: any, data: object, params: { fields?: string[]; }): any;
```

**Parameters**

| Name   | Type                   |
| ------ | ---------------------- |
| user   | any                    |
| id     | any                    |
| data   | object                 |
| params | { fields?: string[]; } |

**Return type**

any

```typescript
updateById(user: any, id: any, data: object, params: { fields?: string[]; }): any;
```

**Parameters**

| Name   | Type                   |
| ------ | ---------------------- |
| user   | any                    |
| id     | any                    |
| data   | object                 |
| params | { fields?: string[]; } |

**Return type**

any

```typescript
deleteById(user: any, id: any, params: {}): any;
```

**Parameters**

| Name   | Type |
| ------ | ---- |
| user   | any  |
| id     | any  |
| params | {}   |

**Return type**

any


----------

### CollectionParams

**Warning Beta!**

Deprecated!</span>

```typescript
interface CollectionParams {
    query?: object | undefined;
    fields?: string[];
}
```

**Properties**

| Name   | Type                    | Optional |
| ------ | ----------------------- | -------- |
| query  | object &#124; undefined | true     |
| fields | string[]                | true     |

----------

### CookieOptions

```typescript
interface CookieOptions {
    domain?: string | undefined;
    expires?: Date | undefined;
    httpOnly?: boolean | undefined;
    maxAge?: number | undefined;
    path?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: "strict" | "lax";
}
```

**Properties**

| Name     | Type                     | Optional |
| -------- | ------------------------ | -------- |
| domain   | string &#124; undefined  | true     |
| expires  | Date &#124; undefined    | true     |
| httpOnly | boolean &#124; undefined | true     |
| maxAge   | number &#124; undefined  | true     |
| path     | string &#124; undefined  | true     |
| secure   | boolean &#124; undefined | true     |
| sameSite | "strict" &#124; "lax"    | true     |

----------

### Route

```typescript
interface Route {
    httpMethod: HttpMethod;
    path: string;
    hooks: HookFunction[];
    controller: any;
    propertyKey: string;
}
```

**Properties**

| Name        | Type                                     | Optional |
| ----------- | ---------------------------------------- | -------- |
| httpMethod  | [HttpMethod][TypeAliasDeclaration-2]     | false    |
| path        | string                                   | false    |
| hooks       | [HookFunction][TypeAliasDeclaration-3][] | false    |
| controller  | any                                      | false    |
| propertyKey | string                                   | false    |

----------

### [IAuthenticator][InterfaceDeclaration-1]

----------

### [Strategy][InterfaceDeclaration-2]

----------

### [IResourceCollection][InterfaceDeclaration-4]

----------

### [CollectionParams][InterfaceDeclaration-5]

----------

### CreateAppOptions

```typescript
interface CreateAppOptions {
    store(session: any)?: any;
}
```
#### Method

```typescript
store(session: any)?: any;
```

**Parameters**

| Name    | Type |
| ------- | ---- |
| session | any  |

**Return type**

any


## Types

### Class

```typescript
type Class<T = any> = new (args: any[]) => T;
```

**Type parameters**

| Name | Default |
| ---- | ------- |
| T    | any     |

**Type**

new (args: any[]) => T

----------

### HttpMethod

```typescript
type HttpMethod = "POST" | "GET" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
```

**Type**

"POST" | "GET" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS"

----------

### HookPostFunction

```typescript
type HookPostFunction = (ctx: Context<any>, services: ServiceManager, response: HttpResponse) => void | Promise<void>;
```

**Type**

(ctx: Context<any>, services: ServiceManager, response: HttpResponse) => void | Promise<void>

----------

### HookFunction

```typescript
type HookFunction = (ctx: Context<any>, services: ServiceManager) => void | HttpResponse | HookPostFunction | Promise<void | HttpResponse | HookPostFunction>;
```

**Type**

(ctx: Context<any>, services: ServiceManager) => void | [HttpResponse][ClassDeclaration-8] | [HookPostFunction][TypeAliasDeclaration-4] | Promise<void | [HttpResponse][ClassDeclaration-8] | [HookPostFunction][TypeAliasDeclaration-4]>

----------

### HookDecorator

```typescript
type HookDecorator = (target: any, propertyKey?: string | undefined) => any;
```

**Type**

(target: any, propertyKey?: string | undefined) => any

## Classes

### [ObjectDoesNotExist][ClassDeclaration-1]


----------

### [PermissionDenied][ClassDeclaration-2]


----------

### [ValidationError][ClassDeclaration-3]


----------

### [LoginController][ClassDeclaration-4]

**Warning Beta!**

Deprecated!</span>


----------

### [RestController][ClassDeclaration-15]

**Warning Beta!**

Deprecated!</span>


----------

### [Context][ClassDeclaration-0]


----------

### [HttpResponse][ClassDeclaration-8]


----------

### [HttpResponseSuccess][ClassDeclaration-10]


----------

### [HttpResponseOK][ClassDeclaration-19]


----------

### [HttpResponseCreated][ClassDeclaration-21]


----------

### [HttpResponseNoContent][ClassDeclaration-9]


----------

### [HttpResponseRedirection][ClassDeclaration-7]


----------

### [HttpResponseRedirect][ClassDeclaration-6]


----------

### [HttpResponseClientError][ClassDeclaration-12]


----------

### [HttpResponseBadRequest][ClassDeclaration-13]


----------

### [HttpResponseUnauthorized][ClassDeclaration-14]


----------

### [HttpResponseForbidden][ClassDeclaration-20]


----------

### [HttpResponseNotFound][ClassDeclaration-11]


----------

### [HttpResponseMethodNotAllowed][ClassDeclaration-16]


----------

### [HttpResponseConflict][ClassDeclaration-22]


----------

### [HttpResponseServerError][ClassDeclaration-18]


----------

### [HttpResponseInternalServerError][ClassDeclaration-23]


----------

### [HttpResponseNotImplemented][ClassDeclaration-17]


----------

### [Config][ClassDeclaration-24]


----------

### [ServiceManager][ClassDeclaration-5]

Identity Mapper that instantiates and returns service singletons.


----------

### [LoginController][ClassDeclaration-4]

----------

### [RestController][ClassDeclaration-15]

[SourceFile-0]: index.md#indexts
[FunctionDeclaration-0]: index.md#login
[ClassDeclaration-0]: index/context.md#context
[FunctionDeclaration-1]: index.md#logout
[ClassDeclaration-0]: index/context.md#context
[FunctionDeclaration-2]: index.md#parsepassword
[FunctionDeclaration-3]: index.md#loginoptional
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-4]: index.md#loginrequired
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-5]: index.md#isobjectdoesnotexist
[ClassDeclaration-1]: index/objectdoesnotexist.md#objectdoesnotexist
[FunctionDeclaration-6]: index.md#ispermissiondenied
[ClassDeclaration-2]: index/permissiondenied.md#permissiondenied
[FunctionDeclaration-7]: index.md#isvalidationerror
[ClassDeclaration-3]: index/validationerror.md#validationerror
[FunctionDeclaration-8]: index.md#log
[InterfaceDeclaration-0]: index.md#logoptions
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-9]: index.md#validatebody
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-10]: index.md#validateheaders
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-11]: index.md#validateparams
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-12]: index.md#validatequery
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-13]: index.md#strategy
[InterfaceDeclaration-2]: index.md#strategy
[InterfaceDeclaration-2]: index.md#strategy
[InterfaceDeclaration-2]: index.md#strategy
[InterfaceDeclaration-2]: index.md#strategy
[FunctionDeclaration-14]: index.md#controller
[TypeAliasDeclaration-1]: index.md#class
[TypeAliasDeclaration-1]: index.md#class
[FunctionDeclaration-15]: index.md#escapeprop
[FunctionDeclaration-16]: index.md#escape
[FunctionDeclaration-17]: index.md#getajvinstance
[FunctionDeclaration-18]: index.md#isinfile
[FunctionDeclaration-19]: index.md#render
[ClassDeclaration-19]: index/httpresponseok.md#httpresponseok
[FunctionDeclaration-20]: index.md#validate
[FunctionDeclaration-21]: index.md#head
[FunctionDeclaration-22]: index.md#options
[FunctionDeclaration-23]: index.md#get
[FunctionDeclaration-24]: index.md#post
[FunctionDeclaration-25]: index.md#put
[FunctionDeclaration-26]: index.md#patch
[FunctionDeclaration-27]: index.md#delete
[FunctionDeclaration-28]: index.md#ishttpresponse
[ClassDeclaration-8]: index/httpresponse.md#httpresponse
[FunctionDeclaration-29]: index.md#ishttpresponsesuccess
[ClassDeclaration-10]: index/httpresponsesuccess.md#httpresponsesuccess
[FunctionDeclaration-30]: index.md#ishttpresponseok
[ClassDeclaration-19]: index/httpresponseok.md#httpresponseok
[FunctionDeclaration-31]: index.md#ishttpresponsecreated
[ClassDeclaration-21]: index/httpresponsecreated.md#httpresponsecreated
[FunctionDeclaration-32]: index.md#ishttpresponsenocontent
[ClassDeclaration-9]: index/httpresponsenocontent.md#httpresponsenocontent
[FunctionDeclaration-33]: index.md#ishttpresponseredirection
[ClassDeclaration-7]: index/httpresponseredirection.md#httpresponseredirection
[FunctionDeclaration-34]: index.md#ishttpresponseredirect
[ClassDeclaration-6]: index/httpresponseredirect.md#httpresponseredirect
[FunctionDeclaration-35]: index.md#ishttpresponseclienterror
[ClassDeclaration-12]: index/httpresponseclienterror.md#httpresponseclienterror
[FunctionDeclaration-36]: index.md#ishttpresponsebadrequest
[ClassDeclaration-13]: index/httpresponsebadrequest.md#httpresponsebadrequest
[FunctionDeclaration-37]: index.md#ishttpresponseunauthorized
[ClassDeclaration-14]: index/httpresponseunauthorized.md#httpresponseunauthorized
[FunctionDeclaration-38]: index.md#ishttpresponseforbidden
[ClassDeclaration-20]: index/httpresponseforbidden.md#httpresponseforbidden
[FunctionDeclaration-39]: index.md#ishttpresponsenotfound
[ClassDeclaration-11]: index/httpresponsenotfound.md#httpresponsenotfound
[FunctionDeclaration-40]: index.md#ishttpresponsemethodnotallowed
[ClassDeclaration-16]: index/httpresponsemethodnotallowed.md#httpresponsemethodnotallowed
[FunctionDeclaration-41]: index.md#ishttpresponseconflict
[ClassDeclaration-22]: index/httpresponseconflict.md#httpresponseconflict
[FunctionDeclaration-42]: index.md#ishttpresponseservererror
[ClassDeclaration-18]: index/httpresponseservererror.md#httpresponseservererror
[FunctionDeclaration-43]: index.md#ishttpresponseinternalservererror
[ClassDeclaration-23]: index/httpresponseinternalservererror.md#httpresponseinternalservererror
[FunctionDeclaration-44]: index.md#ishttpresponsenotimplemented
[ClassDeclaration-17]: index/httpresponsenotimplemented.md#httpresponsenotimplemented
[FunctionDeclaration-45]: index.md#hook
[TypeAliasDeclaration-3]: index.md#hookfunction
[TypeAliasDeclaration-0]: index.md#hookdecorator
[FunctionDeclaration-46]: index.md#gethookfunction
[TypeAliasDeclaration-0]: index.md#hookdecorator
[TypeAliasDeclaration-3]: index.md#hookfunction
[FunctionDeclaration-47]: index.md#makecontrollerroutes
[TypeAliasDeclaration-3]: index.md#hookfunction
[TypeAliasDeclaration-1]: index.md#class
[ClassDeclaration-5]: index/servicemanager.md#servicemanager
[InterfaceDeclaration-6]: index.md#route
[FunctionDeclaration-48]: index.md#getpath
[TypeAliasDeclaration-1]: index.md#class
[FunctionDeclaration-49]: index.md#gethttpmethod
[TypeAliasDeclaration-1]: index.md#class
[FunctionDeclaration-50]: index.md#createcontroller
[TypeAliasDeclaration-1]: index.md#class
[ClassDeclaration-5]: index/servicemanager.md#servicemanager
[FunctionDeclaration-51]: index.md#createservice
[TypeAliasDeclaration-1]: index.md#class
[ClassDeclaration-5]: index/servicemanager.md#servicemanager
[FunctionDeclaration-52]: index.md#dependency
[FunctionDeclaration-53]: index.md#createapp
[TypeAliasDeclaration-1]: index.md#class
[InterfaceDeclaration-7]: index.md#createappoptions
[InterfaceDeclaration-0]: index.md#logoptions
[InterfaceDeclaration-1]: index.md#iauthenticator
[InterfaceDeclaration-2]: index.md#strategy
[InterfaceDeclaration-1]: index.md#iauthenticator
[TypeAliasDeclaration-1]: index.md#class
[InterfaceDeclaration-4]: index.md#iresourcecollection
[InterfaceDeclaration-5]: index.md#collectionparams
[InterfaceDeclaration-3]: index.md#cookieoptions
[InterfaceDeclaration-6]: index.md#route
[TypeAliasDeclaration-2]: index.md#httpmethod
[TypeAliasDeclaration-3]: index.md#hookfunction
[InterfaceDeclaration-7]: index.md#createappoptions
[TypeAliasDeclaration-1]: index.md#class
[TypeAliasDeclaration-2]: index.md#httpmethod
[TypeAliasDeclaration-4]: index.md#hookpostfunction
[TypeAliasDeclaration-3]: index.md#hookfunction
[ClassDeclaration-8]: index/httpresponse.md#httpresponse
[TypeAliasDeclaration-4]: index.md#hookpostfunction
[ClassDeclaration-8]: index/httpresponse.md#httpresponse
[TypeAliasDeclaration-4]: index.md#hookpostfunction
[TypeAliasDeclaration-0]: index.md#hookdecorator
[ClassDeclaration-1]: index/objectdoesnotexist.md#objectdoesnotexist
[ClassDeclaration-2]: index/permissiondenied.md#permissiondenied
[ClassDeclaration-3]: index/validationerror.md#validationerror
[ClassDeclaration-4]: index/logincontroller.md#logincontroller
[ClassDeclaration-15]: index/restcontroller.md#restcontroller
[ClassDeclaration-0]: index/context.md#context
[ClassDeclaration-8]: index/httpresponse.md#httpresponse
[ClassDeclaration-10]: index/httpresponsesuccess.md#httpresponsesuccess
[ClassDeclaration-19]: index/httpresponseok.md#httpresponseok
[ClassDeclaration-21]: index/httpresponsecreated.md#httpresponsecreated
[ClassDeclaration-9]: index/httpresponsenocontent.md#httpresponsenocontent
[ClassDeclaration-7]: index/httpresponseredirection.md#httpresponseredirection
[ClassDeclaration-6]: index/httpresponseredirect.md#httpresponseredirect
[ClassDeclaration-12]: index/httpresponseclienterror.md#httpresponseclienterror
[ClassDeclaration-13]: index/httpresponsebadrequest.md#httpresponsebadrequest
[ClassDeclaration-14]: index/httpresponseunauthorized.md#httpresponseunauthorized
[ClassDeclaration-20]: index/httpresponseforbidden.md#httpresponseforbidden
[ClassDeclaration-11]: index/httpresponsenotfound.md#httpresponsenotfound
[ClassDeclaration-16]: index/httpresponsemethodnotallowed.md#httpresponsemethodnotallowed
[ClassDeclaration-22]: index/httpresponseconflict.md#httpresponseconflict
[ClassDeclaration-18]: index/httpresponseservererror.md#httpresponseservererror
[ClassDeclaration-23]: index/httpresponseinternalservererror.md#httpresponseinternalservererror
[ClassDeclaration-17]: index/httpresponsenotimplemented.md#httpresponsenotimplemented
[ClassDeclaration-24]: index/config.md#config
[ClassDeclaration-5]: index/servicemanager.md#servicemanager