import { Controller, Get, Delete, Post, Put, HttpCode } from '@nestjs/common';

@Controller('sword')
export class SwordController {

 @Get()
 @HttpCode(202)
  getSword(): {} {
    return  {nombre: "Get"}
}

@Post()
@HttpCode(202)
  CreateSword(): {} {
    return {nombre: "Post"}
}

@Delete()
@HttpCode(202)
  DeleteSword(): {} {
    return  {nombre: "Delete"}
}

@Put()
@HttpCode(202)
  AñadirSword(): {} {
    return  {nombre: "Get"} 
}

}
