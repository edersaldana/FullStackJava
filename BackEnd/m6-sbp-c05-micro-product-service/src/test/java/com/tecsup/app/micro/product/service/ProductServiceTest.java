package com.tecsup.app.micro.product.service;

import com.tecsup.app.micro.product.client.User;
import com.tecsup.app.micro.product.client.UserClient;
import com.tecsup.app.micro.product.dto.Product;
import com.tecsup.app.micro.product.entity.ProductEntity;
import com.tecsup.app.micro.product.mapper.ProductMapper;
import com.tecsup.app.micro.product.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class ProductServiceTest {

    @MockitoBean
    private ProductRepository productRepository;

    @MockitoBean
    private ProductMapper productMapper;

    @MockitoBean
    private UserClient userClient;

    @Autowired
    private ProductService productService;


    @Test
    void getUserById_ok() {

        Long id = 100L;

        ProductEntity entity = new ProductEntity();
        entity.setId(id);
        entity.setCreatedBy(10L);

        User user = new User();
        user.setId(10L);
        user.setName("Juan Perez");

        Product expected = new Product();
        expected.setId(id);
        expected.setName("Juan Perez");

        when(productRepository.findById(id)).thenReturn(Optional.of(entity));
        when(userClient.getUserById(10L)).thenReturn(user);
        when(productMapper.toDomainWithUser(entity, user)).thenReturn(expected);

        Product result = productService.getUserById(id);

        assertNotNull(result);
        assertEquals("Juan Perez", result.getName());

        verify(productRepository).findById(id);
        verify(userClient).getUserById(10L);
        verify(productMapper).toDomainWithUser(entity, user);
    }


    @Test
    void getAllProducts_ok() {

        ProductEntity entity1 = new ProductEntity();
        entity1.setId(1L);

        ProductEntity entity2 = new ProductEntity();
        entity2.setId(2L);

        Product p1 = new Product();
        p1.setId(1L);

        Product p2 = new Product();
        p2.setId(2L);

        List<ProductEntity> entityList = Arrays.asList(entity1, entity2);

        when(productRepository.findAll()).thenReturn(entityList);
        when(productMapper.toDomain(entity1)).thenReturn(p1);
        when(productMapper.toDomain(entity2)).thenReturn(p2);

        List<Product> result = productService.getAllProducts();

        assertEquals(2, result.size());
        assertEquals(1L, result.get(0).getId());
        assertEquals(2L, result.get(1).getId());

        verify(productRepository).findAll();
        verify(productMapper).toDomain(entity1);
        verify(productMapper).toDomain(entity2);
    }



    @Test
    void createProduct_ok() {

        Product input = new Product();
        input.setName("Laptop");

        ProductEntity entity = new ProductEntity();
        entity.setName("Laptop");

        ProductEntity saved = new ProductEntity();
        saved.setId(1L);
        saved.setName("Laptop");

        Product expected = new Product();
        expected.setId(1L);
        expected.setName("Laptop");

        when(productMapper.toEntity(input)).thenReturn(entity);
        when(productRepository.save(entity)).thenReturn(saved);
        when(productMapper.toDomain(saved)).thenReturn(expected);

        Product result = productService.createProduct(input);

        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("Laptop", result.getName());

        verify(productMapper).toEntity(input);
        verify(productRepository).save(entity);
        verify(productMapper).toDomain(saved);
    }



    @Test
    void deleteProduct_ok() {

        Long id = 1L;

        when(productRepository.existsById(id)).thenReturn(true);

        productService.deleteProduct(id);

        verify(productRepository).existsById(id);
        verify(productRepository).deleteById(id);
    }

    @Test
    void deleteProduct_notFound() {

        Long id = 99L;

        when(productRepository.existsById(id)).thenReturn(false);

        RuntimeException ex =
                assertThrows(RuntimeException.class, () -> productService.deleteProduct(id));

        assertEquals("Product no encontrado con id: 99", ex.getMessage());

        verify(productRepository).existsById(id);
        verify(productRepository, never()).deleteById(any());
    }

}
