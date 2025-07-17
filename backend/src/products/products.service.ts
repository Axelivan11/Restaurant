import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entity/products.entity';
import { Repository } from 'typeorm';
import { productsDto } from './dto/products.dto';
import { Categories } from '../products/entity/category.entity'
import { categoryDto } from './dto/category.dto';

@Injectable()
export class ProductsService {
 constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,

    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}


  findAll(): Promise<Products[]> {
    return this.productsRepository.find({ relations: ['category'] });
  }

  async create(productData: productsDto): Promise<Products> {
    const { name, imageUrl, description, available, categoryId,  } = productData;

    
    const category = await this.categoriesRepository.findOne({ where: { id: categoryId } });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }

    const product = this.productsRepository.create({
      name,
      imageUrl,
      description,
      available,
      category,
    });

    return await this.productsRepository.save(product);
  }

  async findOneById(id: number): Promise<Products> {
    const product = await this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(id: number, updateData: productsDto): Promise<Products> {
  const product = await this.findOneById(id);

  if (!product) {
    throw new NotFoundException(`Producto con ID ${id} no encontrado`);
  }

  if (updateData.categoryId) {
    const category = await this.categoriesRepository.findOne({ where: { id: updateData.categoryId } });

    if (!category) {
      throw new NotFoundException(`Categoría con ID ${updateData.categoryId} no encontrada`);
    }

    product.category = category;
  }

  Object.assign(product, updateData);
  
  return await this.productsRepository.save(product);
}


  async delete(id: number): Promise<{ message: string }>{
    const product = await this.findOneById(id);

    if(!product){
      throw new BadRequestException('Producto no existe. intente nuevamente');
    }

    await this.productsRepository.remove(product);

    return { message: 'Producto eliminado con exito' };

  }



  // -------------------------------------------------------------------------------------

  async findAllCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }

  async createCategory(CategoryDto: categoryDto): Promise<Categories> {
    const category = this.categoriesRepository.create(CategoryDto);
    return await this.categoriesRepository.save(category);
  }

  async deleteCategory(id: number): Promise<{ message: string }>{
    const category = await this.categoriesRepository.findOne({
    where: { id },
    relations: ['products'],
  });

  if (!category) {
    throw new NotFoundException(`Categoria con el ID ${id} no encontrado`);
  }

    await this.categoriesRepository.remove(category);

    return { message: 'Categoria eliminada con exito' };

  }

}
