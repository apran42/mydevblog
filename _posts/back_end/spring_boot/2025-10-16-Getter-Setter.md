---
layout: post
title: "[Spring Boot] Lombok으로 Getter, Setter, 생성자 코드 간소화하기"
date: 2025-10-16
categories: ["back_end","spring_boot"]
---
---
## 1. Lombok으로 반복적인 코드 줄이기

#### 자바(Java)에서 클래스의 **private 변수**에 접근하거나 값을 변경/수정하기 위해서는 **`Getter()` 메서드**와 **`Setter()` 메서드**를 반드시 정의해야 합니다. 이 메서드들은 코드를 길어지게 만드는 **반복적인 코드(Boilerplate Code)**의 대표적인 예입니다.

#### **롬복(Lombok)** 라이브러리를 사용하면, **`@Getter`, `@Setter` 어노테이션** 추가만으로 이 메서드들을 자동으로 생성하여 코드를 매우 간결하게 만들 수 있습니다.

### @Getter, @Setter 활용 예시
---
#### HelloLombok.java: Getter/Setter 자동 생성
```java
package com.mysite.sbb;

import lombok.Getter; // lombok의 Getter를 import
import lombok.Setter; // lombok의 Setter를 import

// 클래스에 어노테이션 추가
@Getter
@Setter
public class HelloLombok {
    private String hello;
    private int lombok;

    public static void main(String[] args) {
        HelloLombok helloLombok = new HelloLombok();
        
        // setHello, setLombok 메서드를 별도로 정의하지 않았지만 사용 가능
        helloLombok.setHello("hello");
        helloLombok.setLombok(5);

        System.out.println(helloLombok.getHello()); // getHello() 메서드 사용
        System.out.println(helloLombok.getLombok()); // getLombok() 메서드 사용
    }
}
```
---
### 2. @RequiredArgsConstructor로 필수 생성자 자동화
#### 객체를 생성할 때 필요한 필드를 인자로 받는 **생성자**를 만드는 것 또한 반복적인 작업입니다.

#### 롬복의 **`@RequiredArgsConstructor`** 어노테이션을 사용하면, 클래스 내에 선언된 **`final `**키워드가 붙은 필드만을 인자로 사용하는 생성자를 자동으로 만들어 줍니다. 이는 객체를 생성하고 초기화할 때 매우 편리합니다.

### @RequiredArgsConstructor 활용 예시
---
#### HelloLombok.java: 필수 필드 생성자 자동 생성
```java

package com.mysite.sbb;

import lombok.Getter;
import lombok.RequiredArgsConstructor; // RequiredArgsConstructor import

// 애노테이션 추가
@Getter
@RequiredArgsConstructor // final 필드를 사용하는 생성자 자동 생성
public class HelloLombok {
    // 필드에 final을 붙여 필수값임을 명시
    private final String hello; 
    private final int lombok;

    public static void main(String[] args) {
        // RequiredArgsConstructor가 만든 생성자를 사용하여 객체 생성
        HelloLombok helloLombok = new HelloLombok("hello", 5); 
        
        System.out.println(helloLombok.getHello());
        System.out.println(helloLombok.getLombok());
        
        /*
        이전처럼 set 메서드를 사용하지 않고,
        생성자에서 바로 필드를 초기화할 수 있어 코드가 간결해집니다.
        */
    }
}
```
### 위와 같이 **`@RequiredArgsConstructor`**를 사용하면 해당 **`final`** 속성(hello, lombok)을 사용하는 생성자를 자동으로 만들어줍니다.