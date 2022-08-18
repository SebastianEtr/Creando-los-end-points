import { Controller, Get, Delete, Post, Put } from '@nestjs/common';

@Controller('sword')
export class SwordController {

 @Get()
  getSword(): {} {
    return  {nombre: "Get"}
}

@Post()
  CreateSword(): {} {
    return {nombre: "Post"}
}

@Delete()
  DeleteSword(): {} {
    return  {nombre: "Delete"}
}

@Put()
  AñadirSword(): {} {
    return  {nombre: "Get"} 
}

}
