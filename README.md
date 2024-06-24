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

## Model define
- Use `@OneToMany`, `@ManyToOne` is required
```
@ManyToOne(type => Category)
@JoinColumn()
category: Category;
```
- `@JoinColumn()` this decorator is optional for @ManyToOne, but required for @OneToOne
- `@ManyToOne(type => Category)` this code will create column __categoryId = propertyName + referencedColumnName__ in the table, to change change this name can specify the join column name `@JoinColumn({ name: "cat_id" })`
- Define ManyToOne is __define foreign__ key constraint
- Always refers to the primary column of the related entity

```
@Entity({ name: 'Brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;
}
```

```
  @ManyToOne(() => Category, () => {}, {
    cascade: true,
    onDelete: 'CASCADE',
  })
```
- cascade when set true, the relation object will auto save, no need to call save() one by one object 


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
