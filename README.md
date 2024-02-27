## Middle ware
- Is a function call before router handler
## Exception filter
- When an exception not handled by your code, it's catch by this
which then automatically send and user-friendly response
## Pipe
- Transformation: From string to integer
- Validation: Evaluate input data if valid, otherwise throw exception
## Guard
- Determine whether a given request will be handled by the route handler or not,
Have access to the ExecutionContext instance
## Interceptor
- interceptor(ExecutionContext, CallHandler), modify response  P
- Transform the result return from controller before send to client
- Bind extra logic before/ after method execution 

### update thu 5 1/2/2024

nest g module --name for modules
nest g controller --name for controller
nest g service for --name for service

constructor (private readonly name: serviceName){}

@Get() /items
@Get('id') /item/id

getAll(@Param('id') id: string) {}

itemRepository extract item from tbale

fix metadata was not found => import typeorm module forFeature


### update thu 6 2/2/2024

- Define các entity
- Cách generate migration từ các entity
- Dùng ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js thay ts-node-typeorm-commonjs
  để fix lỗi import \*.entity

- define ManyToOne is define foreign key constraint
