import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './workshopElements';

export default class Workshop extends Component {
render() {
  return (
    <ProductsContainer id='Workshops'>
        <ProductsHeading>Workshops</ProductsHeading>
        <ProductsPara>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/gdt.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>GD&T</ProductTitle>
                            <ProductPrice>Price: Rs.500/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>A system for defining and communicating design intent and engineering tolerances </li>
                                    <li> It uses a symbolic language on engg drawings and computer-generated 3D solid models </li>
                                    <li>That eplicitly describe nonminal geometry and it's alloable variation.</li>
                                
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/vehicle.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>Vehicle Diagnosis</ProductTitle>
                            <ProductPrice>Price: Rs.500/-</ProductPrice>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>The mechanics involved with identifying and assessing problems that may negatively affect nominal operation of vehicle </li>
                                    <li>Scan your car's components and systems to  check for issues with components like engine,transmission,oil tank etc...</li>
                                
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
          
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
