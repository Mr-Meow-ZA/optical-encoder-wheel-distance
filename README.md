# Optical Encoder Extension for Microsoft MakeCode
Author: Rapha Pretorius
Email: edubotics.za@gmail.com
[**Optical Encoder** github page here](https://mr-meow-za.github.io/optical-encoder-wheel-distance/)

**Optical Encoder** aims to make your Smart Robot Car more accurate and versatile by allowing you to track distance travelled and disk slots counted. This will let you make 90 degree turns and move set distances. For example to navigate a maze or a grid with set grid sizes. I was surprised to see there was not yet an encoder extension available so I made one myself. This is my first extension.


## To use this Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* copy paste this link **https://github.com/mr-meow-za/optical-encoder-wheel-distance** into search bar and import

## Basic Overview

Add the Initial Setup block to your Start Block and enter the values for your specific parts. It will then automatically create counters based on your input and distance variables.

**Initial Setup Values**
* Wheel Diameter: Outer diameter of the car wheel in mm. Mine is **66.1**
* Number of disk slots: Count how many gaps there are in the small disk that sits in the encoder slot. Mine is **20**
* Encoder 1 to pin: The pin number your encoder 1 signal output is connected to. Mine is **0**
* Encoder 2 to pin: The pin number your encoder 2 signal output is connected to. Mine is **9**
```blocks
Encoder.setValues(66.1, 20, 0, 9)
```


**Reset Counters**
* Simply resets all counters to zero. 
* Each time you want to use distance or slot count to do something like **move forward 100mm** you need to reset the counters, else it will already have a **distance** value and won't work.
* Example: Tell car to move 100mm forward, reset counters, turn left by moving 5 slot counts, reset counters, move forward 100mm, reset counters. 
```blocks
Encoder.resetAllEncoderCounters()
```


**Variables - Counters**
* Gives the number or slots counted by the IR beam in encoder.
* Useful for many functions like creating a **turn 90 degrees** function by telling wheels to each move 5 slots in opposite directions. 5 Slots for mine as its 18 degrees per slot.
* Can be used to calculate speed too.
```blocks
Encoder.encoder1Count()
```


**Variables - Distance**
* Super useful! No more guessing how many seconds to run motor to move X mm forward.
* Put your *move forward* function inside an **if** statement and compare desired distance to the distance variable. Car will then move forward by that many mm and stop.
* Great for navigating **mazes** or **grids** with set block sizes.
```blocks
Encoder.mmMovedOne()
```

**Encoder and Disk that I used**
![EncoderDisk](https://doc-14-7o-docs.googleusercontent.com/docs/securesc/tru6j1ml33fnc4gfjhcoal1ot45h7mu0/6ccuo0tffdqd9j83d44hr0h5javk6du5/1658003400000/01414373054099562668/01414373054099562668/1sJEuvnPUS-DFJ5HDMr3KX5jpL364-LjD?e=download&ax=ACxEAsb3geLXlx-MbAQWpCAvV--oqIfJj6sA0F6BtPkiTMoTDuK8IhchdsRUhawnACHL9IrDTv3CrGhDFIT2Kft_WhMyUseslHWXz4yJmx0uHD_Hl6NMWZR_qTq5rKJDy821TcV0aRvB0nig6ysgsmuUZJWB2NbcBNgIpZ_y0H1kkZlmxcSauxqZ0GjLa0xzbYzv_vaK9PjHf2YO3VdoAz7qMOpLzWYch6ORdYSNp27wed4mSgnHb8UGmYi6lbGHKf-DTmrKHIZ2s8euswpLm1JkHxH5Zb0BpyfjaVtCxBR8r4Nu0gfRNT6A1mk_9daHkUJ3AIScK58gmrNtLcV_LKsOCIOPm3ItkgLG5vPZIsEyTa0gaV3RiU4UtassvSqlEiMsKftP_-9P20abB_fhE8mNRCWFRqSrWFKAxE6aJ2_2JKqZ4PCWqwrOm5s-Sg-Y4LTeHlo71ZsSii5Jk5iyuU7hE2nS9mJYAp6SvuJYBsYxMg9AzTzau-5no-9ROTyoVk6pBfx_52uLvAuNlSFsRhyKuTMU47VFPRkVPhEqbu5z3o225tnULOuYANtlbw5890zgrj2ma34phADwaCfPG0u0KYX3OZx6DlOK7cWU5nyNSx7hwa5qtVLMHj2MtcfhSXE-_h3LkUtnRe05nPoDcemxu8Jue2WXlQID8DyqoGshrS4k5K3PQvoc5t1pMbnbckD0Y35VNWc1x-6OSqlqM0_4ZKWPtrh2OaMFo4ZFzqxjW3egT9Hl36ZQii1J8WotZmTwJgzn5xVH7rrC7mm8eSZOGMW4X1DcKhMZr8pqaBFTQTK3d2sLrzcTq9xwyhZMcaKLQZQ1kyfoG5lIgJdl1_gIxlKZnTIvmYyiCBDIHNBNuDNeFlBxXdvm52bB4zY9FMcYhw&uuid=5d4f7e48-4c3a-4a4f-9654-80e66b050f9b&authuser=0)


**Motors and Wheels that I used**
![MotorWheels](https://doc-14-7o-docs.googleusercontent.com/docs/securesc/tru6j1ml33fnc4gfjhcoal1ot45h7mu0/vv0jr3ossl6ctl2no5ai5t1kfro3hvhq/1658003325000/01414373054099562668/01414373054099562668/1jckF42cG6JdyERGmcWotfZFQkNcqk3ti?e=download&ax=ACxEAsacSWjObXKtvAaEsKRYBWzBacuehoNBEWoP9iuxfZaoq_pgz1eHJZLtIVvkrUV0ASrSqHYzZlRAG_tD18YZ9ntl32XZ5NBkoC7WRpCtAX3mA8mQFCZQrw9JbV8Rvoe0MlP3Ay6SBg_jLsvKbtjeQtgoA4hf492dW2wFk46psdWg4h9b-PKh8FU27WahIKtOGmUTghVu5ZvDJS7BxrRY3LqstcUSy8V9tkukmZLANi9Jq0g9HYYFTX41pS71MVdYP6Y1eAZh_NC0sN35Gbw3Ih3whGo2wlyCGmS-8Q3epNmKea_87ZJMBMPMaUEY86QU0jDdX2U_kMPv1vj75JMzfav9puoWHdwS9XzcIVVlFG4led_vJl0DhgG0uhjyzVlq3oNaHIsik0BMw2bUzrMW_kY-sf93rrI0dCiWN_pEasJ0h8360M2CB1hIKGpoEBgC9zsbhebPM_GLbVtoBypRfNEgynxnJtHcwV2NuTU6p_dT3BOHXvMkADJSmg6519n-gxCzt_0VOYmYPuxfEKckLQ8ij1vFWg87LwZzo2uLFqmM6dcpdMc9mya368WdH0EY9Pa2hNL2K6Z03Lj6rYkWLYQmgYW8HogZ0G_RbrzWNwVus3vzLq0OVUZGWZOOxYX9_A31-DijJBG-nGF7R0GkjZ0iLaeSU8ZgPrMjAqPiilQEnOXHj8ZAlOG_yTGvMghRq1uKwi94dxA1NjCaW3MB6XRhxrExcaoT9Zn0i6gAri3M8QbvZofZ2bgdykpuvzeKputptkrhht1CGXQPhWnfEsFIZzmGX4nvumks25HjPrS2tlxoAb8Bu9ngZ1EqfSDf_1YERcwmrVDcoQrEwzG360WslErsticfM28uEesS636O2FEU8cL4zj6gthBYEMC7PA&uuid=bc1e07da-279b-4069-b2c6-cf91bd239fb3&authuser=0&nonce=5psdnsklsuu3q&user=01414373054099562668&hash=gjbqvgk1hr3fc75p6pd1uiarj5qeth7n)



#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
