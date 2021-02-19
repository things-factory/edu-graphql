# Operato Hub Scenario

창고 비즈니스를 하는 `HatioLab`과 `HatioLab`의 고객으로, 창고를 사용하는 `Daiso`, 두 회사가 존재함을 가정하고
각 회사의 초기 설정 부터 WMS `입고 주문 생성` 및 `수락` 까지...

## Scenario Details

### 사용자 등록

1. https://hub.hatiolab.com

   > jaylee@hatiolab.com, jaylee.possible@gmail.com 두개 생성

2. email 인증을 통한 사용자 활성화
   > 두가지 이메일 모두 활성화

### 회사 등록

> `HatioLab`, `Daiso` 둘다 생성

| HatioLab         | Daiso            |
| ---------------- | ---------------- |
| 사용자 초대      |                  |
| Bizplace 등록    |                  |
| Provisioning     |                  |
| 사용자 초대      |                  |
| 사용자 역할 부여 |                  |
|                  | Bizplace 등록    |
|                  | 사용자 초대      |
|                  | 사용자 역할 부여 |
| Partnership      |                  |
| 역할 허용        |                  |
|                  | 역할부여         |

### 입고 주문 생성

1. https://wms.hatiolab.com

---

### 사용자 초대 (`HatioLab`)

> superUser와 domainOwner에 대해 설명

### Bizplace 등록 (`HatioLab WH`)

> `HatioLab WH`만 생성

> 본사 개념에 대응하는 컴퍼니 도메인과, 지점 혹은 자사의 개념에 대응하는 도메인을 생성

### Provisioning (`HatioLab`)

> 변환전 마스터 섹션에 노출된 도메인이 `HatioLab` 하나인 것을 보여주고

> 변환 이후 각 도메인 별로 마스터 데이터가 저장됨을 설명

> `HatioLab WH`를 창고로 변환 (Master Data Management)

### 사용자 초대 (`HatioLab WH`)

### 사용자 역할 부여 (`HatioLab WH`)

> owner & office 역할 부여

### Bizplace 등록 (`Daiso Pangyo`)

> 일반 bizplace를 유지

### 사용자 초대 (`Daiso Pangyo`)

### 상품 등록 (`Daiso Pangyo`)

### 사용자 역할 부여 (`Daiso Pangyo`)

> 부여 할 수 있는 역할이 없음을 보이고 설명

### Partnership (`HatioLab WH`)

> HatioLab WH 도메인에서 Daiso Pangyo 도메인을 파트너로 초대

### 역할 허용 (`HatioLab WH`)

> Customer 역할을 Daiso Pangyo에 허용

### 역할 부여 (`Daiso Pangyo`)

### 입고 주문 생성

https://wms.hatiolab.com
