import { Controller, Get, Delete, Post, Put, Query, HttpCode, Param, Body } from '@nestjs/common';
import { query } from 'express';
import { param } from 'jquery';
import { CreateSwordDTO } from "../sword/dto/create-sword.dto";

@Controller('sword')
export class SwordController {


 /*
http://localhost:3000/sword?Escalibur=1&DragonSlayer=0&SwordZ=1
 */
 @Get()
 @HttpCode(202)
  getSword(
    @Query("Escalibur") Escalibur:string,
    @Query("DragonSlayer") DragonSlayer:string,
    @Query("SwordZ") SwordZ:string,
    @Query() query: any
    ): {} {
      console.log(query);
      const metadata = {Escalibur,DragonSlayer,SwordZ}
      return  {nombre: "Get", Escalibur: 1, DragonSlayer: 0, SwordZ: 1 }
    }



/*
http://localhost:3000/sword
*/
@Post()
@HttpCode(202)
  CreateSword(
    @Body() body:any,
    @Body("descripcion") descripcion:string,
    @Body("precio") precio:number
  ): {} {

    return { 
      Sword: "escalibur dorada",
      SwordData: {descripcion, precio}
    }
}


/*
http://localhost:3000/sword/DragonSlayer/1
*/
@Delete(":DragonSlayer/:id")
@HttpCode(202)
  DeleteSword(
  @Param("DragonSlayer") DragonSlayer:string, 
  @Param("id") id:number): {} {
    return  {
    nombre: DragonSlayer, 
    codigo: id}
            
}




/*
http://localhost:3000/sword/1
*/
@Put(":id")
@HttpCode(202)
  AñadirSword(
    @Param('id') id: string, 
    @Body() Data: CreateSwordDTO): {} {
      
    return  {
      Sword: "escalibur dorada",
      SwordData: {Data}
    } 
}


}