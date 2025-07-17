import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productsDto } from './dto/products.dto';
import { Products } from './entity/products.entity';
import { categoryDto } from './dto/category.dto';
import { Categories } from './entity/category.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Post()
  async create(@Body() productData: productsDto): Promise<Products> {
    console.log(productData)
    return this.productsService.create(productData);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Products> {
    return this.productsService.findOneById(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateData: productsDto): Promise<Products> {
    return this.productsService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id)
  }


  // ----------------------------------------------------------------------------------------------------------------

  @Get('categories/all')
  async findAllCategories(): Promise<Categories[]> {
    return this.productsService.findAllCategories();
  }


  @Post('categories')
  async createCategory(@Body() CategoryData: categoryDto): Promise<Categories> {
    return this.productsService.createCategory(CategoryData);
  }

  @Delete('categories/:id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deleteCategory(id)
  }
}
