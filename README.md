### update thu 5 1/2/2024

nest g module --name for modules
nest g controller --name for controller
nest g service for --name for service

constructor (private readonly name: serviceName){}

@Get() /items
@Get('id') /item/id

getAll(@Param('id') id: string) {}

itemRepository extract item from tbale

### update thu 6 2/2/2024

- Define các entity
- Cách generate migration từ các entity
- Dùng ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js thay ts-node-typeorm-commonjs
  để fix lỗi import \*.entity

- define ManyToOne is define foreign key constraint
