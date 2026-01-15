package com.tecsup.app.micro.product.service;

import com.tecsup.app.micro.product.ProductServiceApplication;
import com.tecsup.app.micro.product.client.User;
import com.tecsup.app.micro.product.client.UserClient;
import com.tecsup.app.micro.product.dto.Product;
import com.tecsup.app.micro.product.entity.ProductEntity;
import com.tecsup.app.micro.product.mapper.ProductMapper;
import com.tecsup.app.micro.product.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Slf4j
@Service
@AllArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper mapper;
    private final UserClient userClient;


    public Product getUserById(Long id){

        // Call PostgreSQL productdb
        ProductEntity productEntity = productRepository.findById(id).orElse(null);

        // Call microservice user
        User user = userClient.getUserById(productEntity.getCreatedBy());
        log.info(" User : {}", user);

        return  mapper.toDomainWithUser(productEntity,user);
    }

    public List<Product> getAllProducts() {
        List<ProductEntity> entities = productRepository.findAll();
        return entities.stream()
                .map(mapper::toDomain)
                .toList();
    }

    public Product createProduct(Product product) {
        ProductEntity entity = mapper.toEntity(product);
        ProductEntity saved = productRepository.save(entity);
        return mapper.toDomain(saved);
    }

    public void deleteProduct(Long id) {
        if(!productRepository.existsById(id)) {
            throw new RuntimeException("Product no encontrado con id: " + id);
        }
        productRepository.deleteById(id);
    }

}
