### update thu 5 1/2024
nest g module --name for modules
nest g controller --name for controller
nest g service for --name for service

constructor (private readonly name: serviceName){}

@Get() /items
@Get('id') /item/id

getAll(@Param('id') id: string) {}


