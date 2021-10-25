import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import "./All_Games.css";


function All_Games(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jogos.json')
            .then((response) => response.json())
            .then(setData);
    }, []);


    return(
        <div>
            { Header() }
            <div className="containerJogo">

                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="./images/new_world_logo.png" alt= "New World"></img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> New World:</p>
                            <p className="jogoDescrição"> Explore um MMO de mundo aberto emocionante e cheio de perigos e oportunidades, onde você irá forjar um novo destino na ilha sobrenatural de Aeternum. </p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            <p className="textoPreço"> A partir de:  </p>
                            <p className="valorAtual"> R$ 75,49 </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                
                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQA
                    BAAD/2wCEAAoHCBUVFBgUFRUYGRgaGxsaGhsbGhsdGx0hHR8hGxsdIyEbIS0kGyEqHxwbJTcmKi4x
                    NDQ0GiM6PzozPi0zNDMBCwsLEA8QGhISGjMhISExMzMzMzMzMzMzMzMzMzMzMzMzMTMzMzMzMzMzM
                    zMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAKIBNgMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAA
                    AAAAADBAIFAAEGB//EAEMQAAIBAwMBBQYEAwcBBwUAAAECEQADIQQSMUEFIlFhgQYTcZGh8DKxwdF
                    C4fEHFCNSYoKycjM0Q3OSosIkU4OT0v/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAAMB
                    AQEAAAAAAAAAAAAAAREhQQIxEv/aAAwDAQACEQMRAD8A8sYwFH/U3zMfko+dXupt7LKA8hVHq3fbP
                    x3D0qjsW99xbf8AmZU+ZC10PaWpA2rAYMcz12iBBiRluQQYWKqKJ6zp6/oad1OkH4kIKn+Ge+P/AO
                    h/qHrFJOvHz+/r8qo1NRrdbUUG0xVkiAAOPwn6NGQfn/Sq2Kc0FyCVP4XG0+R6H0P5mgNIknHT9zW
                    IAAJ/Oa2+n6genn1rEHTmKDoLzC4llUIO1QvqQJwcxun5UtafJ8RMgealZHiMj4RQtCQjBs7eoxOO
                    D8xRroEJ4xzPgJPkev3zWBLCQsjktHxEZP341g5ralgCCBIyR8sj0jFEsoTmD9/GrEqaJRUtkcVoK
                    Rz1ots+NAe1Ypy2pFZplmmNkVoEsXsio372aR1Op2XNOkwLlwqSeMCQCekkjPlVHrfauyDKqzpwXU
                    wfiEYDcPiVNZzDFX5fNDucUloO0EuljbbcsSDBHG1Tg5EY+Zpq41Js+ABoNK3LkVK7cgGqq/dkmit
                    au8PGl0uGKWuNmjJkfCgLvqTtgfD9aDvXxHzB/KtNcXxHT7zQD1DwY8ieceNQtJAFyQPCY/I4+dD1
                    hByGz5EH8qHpLIeS3TGeB/Ln5VmrG21KloAZ/Fj0HrSerfcZ6dM8eNWeotqttyMkdJGOnA+8+VVir
                    MfT7++Kkaa02pNsyAADExPHz9fjVpY1TbSSC0kSBEgGBjrxjA/IVUG3in+zB4nygc5IwPM+E0AtEw
                    TVc4z58rI58yK1rwy3LqEQe6YYd7gfLB/KpJd93q1uZ7rgmY6DPH7fOia+7/jXCQe8hEHngBfUQPr
                    QVbPj1/T+VBmjo0Hj09CDj1oYWorQFZW9tZQPdihffIWcKA0kmQMZyYx8enNWepDqwJWYQlROCYwy
                    kSpEmJHhSPYu33kFgshhuYwonz/hOOSYzHnTnaCKkKMB4CxkTyTjxYD6+Bp0CuIpLFTtYE90iDg4i
                    ODxjFBLb3YOTumCcczJLePLZ5+NGVRtJkEKIgnIGSI6gDmOM0DstxAkbpJMDOSR068xVRDU6dk5GD
                    wQZU/A/pzQlojkr3gckQcZ8Ig4IoRbyj5x9ao3RUFQQ0YXAP2oOi7KCPYa45A93+MnrJwc8kzHmR8
                    BVW12ywkP3jJIYGRJmJiIHHPTzpTTzKkiduQsYkDk9D/P0q3v9q3LiEPDDkyqt15yMdPA0ZwFb1AI
                    2oUjkseMxAEQWbn4RU7aH8QuCfAgQeeAPw+hzW20zFZYlmAxMGI6ExJME8k8DwqCDyqwHa+7YLJuH
                    HdbOOZLfQDHhAq17PuSIOCP68fDzNVVpBwePL7was9NIABPeHdJ/wAw84gdZB6T8Z1hmmHWaPYSt+
                    7ETUEeJqsrPSY6VNzS9m9g0t2hqbwWLFsO54DMqqvn3iN56BR6+cqxT+3SBrdob1U7nwcsVZRJAGS
                    AVA8JNcWqLEBifjb/AFDk1aWNLqLjG5cDMTy9zuyPLdyOYgEVf2tOhQoShJj8K7h1P8JGZPJMSPCu
                    dua6yYiu9jF23LwBBBQEETiHEiCAQe8Pl1ror71zmk0OptXN9u2rGCCkhS4MEgSAJ4ws/Ordr24Aw
                    yyJ2sCGXoQQeCDW/NY9TeQNS3NVl9sU87TSd0+FWpCjJ8fmKPbTI45wOQOnXk9ZqDDGaNaQQD9+NZ
                    ULU42xjmMRFLBSck05qunx/P8ApQnIA+dAHUpmREERjitabch3AwfWp2rf+H55I/WflW98iahkvqH
                    At7duZEnxMz9/CluBkweY+/jRdaxEAUzptNJAAzjzn4cmeePWpdNQCARM8it6F9rcwZgY8ec/v4/G
                    ialdrsBwe8MiBkzHr4fKoWSN4/bPz5Hoat3EmqHrXJcXMkAjniAc8Y4jg+NMdrNvuDaZK8kHgfijg
                    cSegzPxINdGcDJ6T1zz+/hSK7mPJHwMViNCX0AbE5EmfP8AOhboMj7x/OtXkj1k/p6ihCqohuYzzP
                    39+dZQqygtey720t3ZBEGInx/Sta69sYG2e7M7ekrkSp45PQdaLp7BRSzAiGKmQRmOD4HHHOaT1ds
                    7iYwxAEZ5j+dToNf1TpbgQR3VBIUwdsyMTMEDw5oOhcbGWDMT8YI/Sag94kkGPxE4xmI/T6nxoiAq
                    qhACXJwASedqgeobp1+VBNSyFUKsSYhpUAiOIIJkZ6wcGlxRr9xnMuoU4/DgeWOmI60InpBzxj7zV
                    RJWotkQZoW0A9fOY568UTJGOPGqHrF0giOfAR1qSt3oI6mY+uPClbMyBhYzAx6zNEQANuIHWD981U
                    Wa3DIB8egEeHzz99cv247ycZxStrjbAj4Yo6XyB4gz8R+/rRBLFyTVsDP3HJnmDHXp1qosoJlePDw
                    qytnHM/v4VqM1Z2yQI9BUGFSsSazUmDWmU1uQCSYABJPgBkmqDtPtk4C7lB5EwcYIaPiMT4Yqx1t0
                    i2YwTIHQcEknyAE/Ca4ttSA5UgnJIO4iJADA+RA+Nc/V434nXQabtAicqq+Y3T5+Z9KaXtEQxII85
                    CyMdFE/UVygdVg7CPMN+4NM3dSkRvunHgY5EYBhj4cdK5uixTVszHbBYyACYA+piBJOSat7vaNtf8
                    IqHk5ubQWEc95jNuTgRu+A684bqWFbq7iDIEgYlOvWZP7Une14hVQCZGepzInw4X0jzoL7UnaYmRy
                    D4jofvqCKSYmmrFxLiqyjaY7yzMHkx4DP09az3VdJtzuijg0T3kLt8vX+kVO+kCaXyVbyj9ao1ceB
                    x9c/09KHceRHj5jr+VbvgbR44/SfrQkTI+f361BYWLIOJAkDbPGPPpn0+FIOdrER/I9RT8mJ/Pjz9
                    I/Ol9Y0/lzzHmOeg9KgRd5ceHP3nHSn9N2VcuIXXgTKmYgQOTifj0EzzCFvEtjHlMnHj5kY+NG0Gr
                    NtXIZpIMiSQwOGBH61m541ACjloAZiOmWP0o9zR3AhcqQuDOMcDImQJIEkRJHiKHodXFwHoYBPUZ5
                    H7ennXVrpxctuwbBRlMPIBZdqwJhTunJk9weOZ+rNFjjZxycD+nNQVY4meR5fp41pBlgRkfHocjB6
                    ZpnT2wxAkLjzPXJ5nyqqWv2jEnjp8x8/60B0jFPakgqfDAA8o/Pn1NIlvyoI1lR3VlFdE3azMRcZH
                    XBBKcMMt5QBu4kwPjQbuotORG3mRgowPQ47pPzpIdp3AAMQBAAkDHlMUK5f3QQoBE5E56fD+ppgDu
                    HJEkwTH5/OrXQ2Sblo213uoWQ3Abnk+Z49etUtWPZule4/cJwu494jgEmIMk4+tKJ61myGTbDGQYk
                    TwoAAgAgx8R5UrkwQSM/fFMapiwQkkmCMtumGJGZM8xz0rNOg3qD5E/Ad4/SrESvWWBbdkgwW8c+I
                    weOaLbUBRDA5MpGRxmes+XH5btCAfl9BWlTujpJMEc4j9x8q0jaNJHOODwfpTnZPZv8AeLvuUuKjt
                    OzcjMHYAts3DKsQDEzNK2k71N9kKy6rTFDn+8WIkmJ94oEx8T6E0pFl2n7OnRstvVam2jsu7Zbtvd
                    dVPBaNqjIPXoeamvs+507aqxcTU2rZO/YrpcSIJ3I4wAM8nGRPRv8AtGV7faOouXFYW3FvY5B2MBb
                    QEBuDDbsc/On/AGKc6bRa7V3N1u3cVEtSINxl3zsB/FO8KDxz0BqKovZ/s46m4FhxaRXuXLiLPdUT
                    tBIjcTjyBJ6VLQd8b1UIrZCAswUdBLEk/E81cf2cuUXU2blwhDpTtUsdoc92VE4Y7oxk0h2UVWyjN
                    AGwH6VZ9ZvxZ2EIFSa1NStahVVSyOitGxnRgjbhuXaxwZBnFEvOqIzswCgSST0reWLHL9v6kK4U/h
                    UCR5fiY/HgR/o864y4+593BJJjwzMefhV37RLeVi921cQOZQujKrA5Xaxwe7HB/Wj6Dscvo4W2X1F
                    5le0BEwh2kCfEOzGOmyuVdZqKGxbuM4W2ruzEBQBJJOAPPJir/t3sZdFcSwV33lRLjuJJ33FkKoB2
                    7VxGJLZmBFF7L7H1endNQjrFtwbnub6O6KjDfvW227bAMxI4pz+1XVkdptdtXCp93aZWUlWymCCII
                    MfnUVW+0HYw01mwt1G/vF5TccsWAtKG2qiqDDE8ljPgIya5lsHuk4Mg9fGvVvb7sS9rNVpEsJJbS
                    ozu0BFBYklm6d4z4ktXD+0XslqtEqvfRQCQoKsHGRIkg4PxA8poN9h3puEbQN4YiJwYDkRMQdpjw3
                    Verpya5rse8ttlY5jiOTOIHnkiK63tPUNZhL1l7LH/ADiAwmMHg5HjWvNY9QhrrEIfvrSGiH4geo/
                    SrHU3x7r3uxxaYlRcKt7ssORuiJ6fEEdDVXcZrclkYDYpypA2v3kbI4IBj4HwrVTCeqQRgzkeUHmM
                    /eajatg7cgTyTxH7DFa1KXLbe6e26uwXahRg7b/wwCJaeB548q1eS5auC3dtujf5XUr5HkZioYH1T
                    RABwcyPh6VXagyBnxqxTSvqGVLSNdeCdqgsQBkk9B8TSVzSMrlHBRwco42FZ6ENEDzoFtkiPE8nHj
                    8qDcQqZzBkUzeBUkYBU9Oh8iCaHqJKkERAn6j+dZaKoYDHGcT1HjHpI9auextdsV3F3adoUpAIuGd
                    qTI8HOegE9BVIxxFD29KzYq91dpGIdVVW3MD0BEAAkQAIO7P+oDkVXXCBthgQTiJx8f55q30aNets
                    FQhwm6VzuIByZ4Egd0T/ABRFUttyT3m448vuTU2RNzOB6em48/eAKQAzTUgHB+nx+/Wl3Ga0QM1lb
                    Nao0b/uzMNwEgKWMZgDJn0/I1BR3HMYwJ8DM/pQ2zJJk855raXMQPGT1BxAwfifnREAasdB2u9ogq
                    qSOp3/AAjDgRHlSR8Y59KJpHUNkfOga1DqxFxQFDFiF3A7QDkRAjJMeU4xRtEoa4Pgy8f6Cv5eGfC
                    tPfsYAttIIllYmR1PeJ73wAHNM6FLMsUZ9xkKjW9xg8mVgEgScDiavECRp3ev5GPrFHW0SiEeDfmf
                    5VNNAB3FuoWJOCdsRAgkjB558Kt9L2cBaEjvKDuIiBLN1HOIzx8saRSppzM0z2ba/wDqNOIn/wCos
                    CPGbi48qZe2BKqrFvAAlj6DNQ7Ja2NRauXXW3bt3UuPuw/+GwbaFAJMkDJAHOaUi19sdZetdp6oWr
                    ty3DWpCu20xZtxKyQxx1mo+z7rrLy6XWhrjOG9zfXF1H5PHdZSu4ncD+EZ4h721Oj1N1dXpNVa3vt
                    97buXFtxtCqrKHAzAgiTwIpX2U1NnSP8A3t7lu9eUbbVi3uO3dIZmfZtVoBAE8MTnArKrD2UsG1qd
                    baud5renvISo5KOoDDwBGfKar+zDGkS+AC3vU01vcoZUYobj3CrSrNAAUEEAyYOKc9lO00TV6jUam
                    4ie9t3JkkkvccOFVRwBt5MQNvjNK+zuqS1bbT6i2t2w4TfsaWtusD3iMve4UGBkbFI6g0Wmg9oLlq
                    4NHqCNRp721GV1UEM52qwZAJG7bMyRkgjbBpO07r6W3dcFbjW9SdLZdoZUChmNzaQVZ4XaJ/CQTzE
                    M61NNZ1Fu5ZvPq9p3C26BUUqO4zvALwSCFVROyCV6p9h9qae2L+m16m5Zv3C9xlndbug964oHQx0E
                    jbHekipaSJey/tW+ovJodcE1Fm+4WWVVdWYja25F70nBnOZkRVi2k9x2Z2i9vN23fGk94BBFlGRAo
                    I4lWbdEfi8hVQljQ6G6up095tS4DvYVtmxDJRHuMplmmWCALwJK1v2Q9pxpff2tWvvtPqSTdwSQzf
                    iuYEkMOQMgqCKiub7LH+NZW3G8XLcESCWLCFU8Dwkx4fHp/wC1VEHaNwhQAbVtl7szIJJGCIJJ9Zr
                    Nb2d2XZuWjYu3LxZg6oXT3dtQ8bnuIu/aIJ2CGxmMTr+0HUWtXqUfT6i0y7Pd4dlKkszd7fyveJ3L
                    4kHIExRv7U7rizoFLEq2mDMudu4BRMepieNx8a3/AGZaxNQt/s3Uy9h7bOgcz7tgVUbJyplpx1AjM
                    yz7ZXNLrF04saqyzaa2yEXS1oN+GChZQG/A2D4jnrzXsv2jZ0bNda5uv3B7tQs7LQZlm67nDERuCi
                    fwrJyYqBJbuaLT6bU2yBe1BuMlyJa2LRNshQRAZpknJAjg11vYHtNqNdaOj1f+Kt0Ptfam4bFYnMA
                    BhCspwZjOartBq9Mtt+y9cHSzbu3Dp9Qq9+2dzBtwHeImcwRnIiCBpptLorzLo7zam5cSFuEKtu0r
                    KWYjaSXuhJH8IXceSCAFx7L6u4ug7QtO+/Zple0rBYRgLjHaIiAVVgOARiJqi7S7c1OpW0124B7oS
                    nu192A/JuEKY3nxEAZgCTL3ZOrs27GrR7yI96x7q0u28xX8QbcVt7VmR1PHTNUiWye5KCRG5mhBA5
                    nw9K1hm10PtFrHXR9m6i27f3i5bdWvMSbgMW921nypM/jGYJgwTMe2+0nv9hrdu/4ly3qdguMBvIW
                    QoZuSdrxJmY8c1D2h19q5o9Fat3rbPpbbK4m4peQg7kqN2VPUHwoReyezDojqbHvWu++y7bBDKNpY
                    pG4r1mMEVFZ7SaO5ptRp9Hpmub2sI82nZWu3HL77hKsJjbEnCqvQCk/aft19Qtq1cFt7lobbmpUZu
                    c7QmACkHLR34UiABNx2V2/otbpRptdcbTX0XYNQg/7RP4lLQ0bollwGPByRXOe0fZ9nS3Et2rty8H
                    HvEuMFW2UJIULBbeZBBbuiVwM0hVSEYxO0AmJM+fNZfckkc92J46+fNMM52pHIYQOf4sfnS2pTvsD
                    zyZHlNOswvpUBcAzBMGOf6+A6mguuTEDy5rEOY+PzjB+NWOjS1cJ94zL3TO0DJHB/OQB+sStZWHY1
                    17aMh76NOwEDDCDEyGCmTIHx8QaS+hFxjA5JxwJz8s1b3EYWRdgCCyqee8QJIMzuG4GR/kPMVR6kd
                    ZJ+M1IkuUrbqfxGB9foKjfup/CvqefzNAUVhFVpEtWVlZRWw3NbDCDjMfr+1RrZFAR3HA8vv603aA
                    Fokjl+esKBMf8Ar+lVxozP3APOaIbVlgd7MeA59RU0skBnBBAMT8p4+I+dJqw4im7f4NsEznnH8JJ
                    iOe6Pl5UQyyQoaVk8Qfvn9KbRCgGYA+AM8kdZ8KQRJIgEA8SZnJE8eIj0rd+4CSYOSYyDjgdPKqHk
                    e4QQbjwZESTieCCYIPhU7JO0jahEbcr0/wBomfP481XFzgSeMepmjBzAEmPs/rVB3ZcTbjONrfo0y
                    Jz60zpNSltiYbIiIH5g5GT06DxpTeZ54/pWDJk/f0oLm12ja6g/IfvTY7QtmANy95DO3EKwJwDPTp
                    4VQqKYsJkR41rLOF0HVrjsAFBYYkEQAF5WRxnw8+tchv7hL/xQ2cE/5j8TicdT8K6M3Stt/MMB4yw
                    KjPkWnPhXL9rMJPGO4IjjG4k5kzjk9c1z93cjfn4LprfvAios3Czy3PMbVGT3VRS0+Lmfw1VJdJgk
                    4BBA8ATmPARXR9kWymk1OrOWCixbMyd10hbrT4hHgf8AW1c0B+IQcRj4VJFyvtNZVgomGURIwcEgH
                    1UCfj5UPUD/ADATnPE4wSPWlQ5UKf8ASv1UH9aKzhgSZP6SQPymqhrSvkKVEZ6jMg5k+dI9s6M23g
                    jLLuIkHPe8MRigpe2skGO8CY+NMdsa1bgtsARtG0z5GR+tTqrrtQo1nR3Qsb7YV2zBa3ttzI/i7pB
                    J5G3mDStpCHV1MKWnA/EMyDyI2k4PlzAiz9m913s97SwWV3QAnGdrp8O+Wg9CAaR7PM28DAAiMEho
                    JDQOAJHy9Z61sm9NuYbipFwBmg6xzOZ8fnmknvmOT9/YrrlywtkRfKgPZWflVYmpYcOw9aI99gMO/
                    wAz+9XJgddOoJkAjz4odzRACVx1/U9MfzoaXCP428Zk+HlRTfcgE3Gz13HEZHGf6VAteRojBHwqDj
                    I2ktIz3YAPgM5zNHFxmO0XHjqS7TPEyT8KVtsfwl3WOm9hHlHT+VZUrcQg5BHhIj5UwhgAjmZ88eH
                    nzTNrS+9HeuXGKggwhaMmMk5BAHrND1VlLZXaX4/iVQQeGGG4g/WpWjd+7vUW++CsErEzI3AgDr3i
                    Y8zHMVUajZ0aT1EER9KauahTk7t2O93R0Az1bgZml7lwNkgwOvWPCetRJEHtgRzkAiRGD1+FRaKvr
                    17T3barscsqgDYBuEY4kAjE1z95CpIz60WVCsrVZVaZW1FarKDQozjA5oS0yxwMetEBU1aWwAok9B
                    9/KqpTVzpbZud0DcYgAbjM4HHgIPpVKsH0xFu0Q9twN0hG/wARZlu8pYzxyPHpVRfJxPh5fpVvf0L
                    WWUhWZQDukEEGJIxxz+dU+paWkdQPymiCueBRn5X4Ck2afqKbGSPQVQZss331imLenafwt/6WoSrk
                    93k+DUxYQeB+VARbPl+dNWLWV+OcVpP+n1g0zYTj7++KrJfthCtlm3lAGWSAZEmBBGRmOPHyg8n2h
                    fUuIMjLEkk5Jk8+vz6V13tNdtiw9qe/sR9oDGFFxFkmIHX7ieU7JNk37TXWC21YF5BOElogAzujb6
                    9KxY3HR+0e+zorGnHdEq92Ikuym4VEHG3cJ8nt+FcWvXzBrrfba9v9yw/8RHv+Bi85W3Pn7q1aX/b
                    XMIsOvxFAzdfPwx8pFSX8JMfw/rSnvJ+v5zTWjuSjr5A/Ix+s+lAo7mR5U05ALoQNhM45HgQTPiKR
                    3ZFNXzIBBMwDPhBI/QUV1vsaBZFwO6hHKOjFto3IWUqZwCd4PmFoWu0507lS+0PO042skkqe8OQGg
                    7eD44NUfYKm5fS0bhtrcJEgTkqSndkA96BWu3LT2L3u2ue8CjcDkA+8AZjEmCTznMU5tO6PuwdQym
                    QZjEcEgjA8Z9IpK8sCKd7Cm5acsRhwFHUYlj8D3R/tNb1OkPIFanxi/VQgol3pRTpzBrLlogdaDaI
                    IAoot4JA+lQUkCT0/rR9ExZcgZP38P5UQqiSc+v6frS2pbvQP0pov3S3j+XT9/Wqxnms5bwsdGhHe
                    ZcEd2QDMwJE5H6xWdpXpgbY5PHwqaXe4o3EcGI6gRMqMiR18PWh6lhiH6eY+NLU6VtAk8AeZBj4SB
                    iohe9DAicYzz8DkVL3me8xI+JNDuOOn1qNI2hDcfcGo3TJJpvRw3dkeU5ny8Bj48UDU29rERQK1lb
                    rKK1WVvbWFao2iyQKm+KGprN1BtaYRz0JpdaIreFVFiFgSZPcJmeDx18JoBEkR4D51pHORP8MfMim
                    9AikjeSo8dpPyjn1IoiHuTJ8iasLelIeegP609Z9yT+J8yfwAeM9TR7l+2kbVLTmZOfLjx8PrVCKW
                    QD09J/WnUsjpRRetXOpVvPj59Kb0umEYeTQB02lk9I9f3pjWf4SKZQMzhELmEBb+JvJRJjrgdaf01
                    pV86ovbm6pFlRMIXLwMAuqG2CeNxVHMZx0zS0kB9sQLdtf8QveuhFIhVBsr34Cr+FGfa3J3Gc92qj
                    2Y7JF0XbpXd7hHuMG/AAqMUWP4mZ4AGAAjEzgVX2EkhiZLEAeIiBx8h6V6V7G6S49goqL7rUXLbu+
                    8BraWyoKsjAFi6J3WWR/iGeKz1rjkP7QIGs9yv/g27dvy7q7h/wA/pXOIYYfEU/23q/fam/fmd9x2
                    U+Kljt9Nu2kkw24f6j/7TREGSp6ThyDEAessB+tCfip2T3X8tv1P8qBZhmnW/Cp8iPqT+opRxmmtM
                    ZUqfMj1A/ag1oL/ALu4lwc22DD4qZFer63sq3cVldEdWypIBwRCkE8YjI8a8kXHoa9b7Dve90tlx/
                    8AbCf/AKybf/wn1qxK4/tjRf3O+t1F22bhAcDhSS0qOoBClgOhXwFWOo0sCDVj7X6FrmjuY7ytbcZ
                    E91ih/wDbcaoaAl9PaJGfdspnmbbLbA9Vz8qvUvxzt21FBuGQR/Wr7UaQ87aWuaUeH1/nRFKpnuxm
                    i+6hCJ73AxnJiafNhQOBP38qmLa8bjAn9v3qVZHNa22QoA4/QUjZTqa6bWaFTmT9+lU2rtbcDjqaz
                    GkNIym7bU8F1VvIEx0+NS1t0FVwB8J8Pj5Uvok/xU/8xP8AkK05wJ8B+VEv1BTJiB9f3obiKKhAE0
                    M5NFG0H/aL4Z6kfwnwzRNWO8fn8ZzOa3oz3wPHH6/mBUtanePB45EHj6UZ6r2FbrHrKNtVomsNaqo
                    wVlardFbqajNRC0RBkVUEQSTR1mccfH7moqhoqW6qGbN8xnNM24PU/f39KTCedO2UxQM6dKs9HbiC
                    OeaQteVPWrjA8n6/tQdDbGBIE+n3zXNe2OhtpbLjebj3CRLysEEt3YAxCCee9BJFXNlzAknOfv8Al
                    XP+2mqLPatKVBVXuMMD8W1UHyBPwbyqUjm7G1RuPTI68GB9M16NY7RfTdlIxJDLZ7gYGQ1xjsicQp
                    ceiGvPbFprjm3bUTcZbakkgAuwUEx0zHB5rovbnVC2ljTA8AO8zJCrstz5nvn/ANNZjVcewj0qdsY
                    Y+W0eGTn6A/OhOwjnNFZztC+GfUgD8h9TVRC5xT2m0ZOjuXunvVtxH+hnmZ6QB/upLUdB5V0ulsR2
                    QzRhtRJIJyANiz0GT/xoOZZRANGcAKPifjwpH61CwJEE4Hkf060VbQK59PLEfmKBe438Q4OD8ev71
                    6B7BarfYdOdlzjydRA+aNXAOmD0ECuh9gdd7u89sxFxJH/Vblhx/oL/AEpCx23tDqwlhwSNzrCLPe
                    ZpER5Y54wapfZntAXFdCIVBcaf4QHayq8dSyNAjM4kzFb7S64vqXBGE2qOPw7Vbnz3E/7z40ho+0m
                    RWt4Cli/qVCj6YzxJiJJK3ZjTtLqSAy5UzB+Bj7+Iqp1Ujg1W6DttkeXyrbd0ASQJIMf5skT6GcEX
                    msScgqQeCsFSOZBHkZ9auUsU1+8V/EeeB/SlRfdpgefHIHh48H5HwNP6gADpMRkA8zPP+361VOrcq
                    318DiPCD4VBl/VMBkekeHx+8Unqb7NyuOaI7HqfAftSjvFMDWlUB1cSIYER5EGh3Ux8qZsR+1Qu+G
                    Pv40CapUtlT+XzopcRQBtYYUbUXJn0/allfc0ff0ouycc/UUCrGsqT2yKyooVZWVlVWqkBWAURVoj
                    arRkTOa0i0ykdc1USDfy/aiIhic/pWrY8h/XFNWrc+XwoNWk+8U6iEiahbsRzVjaSOuB99RQCt2+s
                    jr8abtkYwPv6fKt27a9aYSwk849aA1iWIUdcVw3aeqa7de4YKtG0RkAKFQfGAM/E4rt3vi3bdkO0r
                    bdg3gVQlT6GK4bs/s+5eLLbG4KstMLAAO1RJ7zEggDykwJIlWGfZiDrLO8hUUtcZieBbRnknoO7Hp
                    Vbrr76nUMwgvcuBVGRydqKJ4AG0ZzXSewtkC49z+IIAkdNzQx8zt2j/catND2Eqax9SAAoP+GiiAG
                    Kw7QMKA2R07w8KAWs9ibQSLVx96g95yjIxAz3RBQGJBzz5Vwa3eDGea9N7fRm09wrde2UVnlGPehT
                    3GhsKZiZGT1gV5jAAoNl935V6D2VYVuxyjA5W48g8bbhKnnmU8PDxoqdh6d9NaS5a7y2k7ygq4Zhu
                    Y7pg95j3WU58KfGgRdONPDhFAUmCGIDhzmY3cgnxJIjgB5jYEnbPPHOfIRzNbS9A5z5iYr0rR6e1p
                    /+xVEJxuVu+YzDM5JiQDExPQV5z2xYFvUXUEQHeIIIgmVgg+BFMECLgkzmTJ8DW7Vw27i3EkFGDLP
                    iDIB8QYzTnYGiS4z7ydqqIhtssxxmDjaG+lO9rdkibS2k2hi4MFm6Ag95iT3QxjHXFDJ/t3W27lu1
                    dBOZAE8AgtBE4IZds9Z8Irk7zmea7BtBb2LbZSyIcDeRk8k7cyZ6f5qqe0+xwENy3OJJUycAwSpjp
                    tJg+eelWxJVN/eOBJgc/fn+ldZ7M9pe8tm02WQFlhVgJMtJ5ne3me+OIJrjCM032Vrfc3FuESFmRw
                    SCpXw89wnEgVFdtqNNINVWotHML8v3nFW1y/BIMeHWMeGKCxVqqOYvzJpd3jmug1lifD5cVUajTx0
                    HwoEGveFZ73FTuWY6EeHh50AIOs1FZvqLGtlKkVEUAraHcPjTpkYMfL9aUQwRT1thEdD6/eIolL3+
                    kVlEYgcRWUCIrBWVlGhFoi/tWVlWIYtmjW+Kysog3Wn7I7p9KysoHLZoz81lZQMIcj78K2prKyiI9
                    tf91vf9H/yWkv7P/wDxv/Mtfm1ZWUXgPsxi9fAwNnH/AOX+Q+VdQrGOf4W/KsrKQLdtIP7pcMCfdN
                    mK8xucH1rdZUWPadao3Ljq3/AH881vtG0omFA/D0FZWVUVt+421sng9f8ATXnHtN/3u5/t/wCKVlZ
                    SqtPY38F34p/xuV0TD/CJ6y2a3WUSlLnLf9J/M0vp+T6/8qysqpXGa8RdcDA3Nj/caEnPqKysrLcd
                    rpc27c57if8ABa31FbrK0yjc/Wktd1+FZWVKKw/i9R+dAu/iP30rKyihWefn+RqBrKyoBmiisrKJR
                    DwKysrKI//Z"
                     alt= "Bloodborne"></img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> Bloodborne: </p>
                            <p className="jogoDescrição"> Enfrente seus pesadelos enquanto
                             busca respostas na antiga cidade de Yharnam, agora amaldiçoada
                              com uma estranha doença endêmica que se espalha pelas ruas co
                              mo fogo. </p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            {/* <p className="textoPreço"> </p> */}
                            <p className="descontoPorcent">-49%</p>
                            <p className="valorAntigo"> R$ 129,99 </p>
                            <p className="valorAtual"> R$ 89.99 </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABA
                    QAAAQABAAD/2wCEAAkGBxMTEhUSEhIWFhUXGBoaGBcXGBcYHhodGBgWFxgYHRgYHiggGx0l
                    HhgXITIhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0vLS0tLS0tLS0
                    tLS0tLS0tLS0tLy4tLS0vLS8tLS0tLS0tLS0tLS0tLS0vLf/AABEIAJ8BPgMBIgACEQEDEQ
                    H/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQIEAwYDBAYJAwQDAAABA
                    hEAAwQSITEFQVEGEyJhcYEykaEHFCOxQlKCwdHwFSQzVGJyk9LhQ5LxFrLCwwh0ov/EABkB
                    AAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EADMRAAEDAgQEBQUAAQQDAAAAAAEAAhEDIRIxQVF
                    hcZHwBIGhsdETIjLB4fEUQpLSI2KC/9oADAMBAAIRAxEAPwDiNs607Uen0aaCYI4o4o6FBF
                    JoRR0KyyKlW7ZYgASTRU9gruW4jdGHKd9CI56E6VllrOE8Fwy2Ua6Va5ckgO4GnLIkiR1Jn
                    2pXF+xyqq3EbIrAEEnMmvKd1M9ZrpCYG33a22tr3cDwQIB5R0n+d6reKcSwmCC4fEE91dDZ
                    RlLZIyypjWDmkacjSNfayEQsR2T4Bct4tGuZQEBK+IQzHwquuv6RI81ildurYAYmcxZVIMi
                    Ik8+Wn1Fari/D0S3adRms3FA2kDMNJB/RII0qJiLTuApXvV2IPxqug+JtGUdH677CpVqdxW
                    bp7D+rpo1bGk7I5Hjl/FiuyfFFtXe7uwbF3wuDsDsr+2x8j5UvtbwD7s5KfATt0naPLl5Gr
                    m/2dw8kFJA+LKSCs/4Zjn6VZYsC5bW1lNxAuTPcAmNpzSGnTfLuBUWuL6ofSm/5DLkdp/UK
                    5YGUiyrGf2n3G/8AZXNKFa272TtCPxXk7CF1+lVHaDgT4VlDGQwkaREzCtr8UQY6Eecd5BG
                    a88GVU0VCKlcPwwuXFtlgoY6sxVQIBMksQANN/wA9qVxDQSdEyigVbYpcP93spaRmxDHNcc
                    k+H4lWyiDTXRiSCdoOpFL4Tggbd66wzFYRANfEdWb0ygx/mo7uHNoKyTmZAxYyAM4zHX0ge
                    1B1PEQZIgzY589xw11QxgSITL8LuElrmS2SScvhnXWBbT4R5GIqNZwTN3uWPwkLsSY0DImn
                    nLrpT3Ci7A7nUx5nT+H1ocStCS1q1dRBAbvDJLakkwq9No0jzrOkQG8L2jMWzBk6RN76XDT
                    e6r6FChTJkKFChWWQoUKOssioUKFZZCiipODs5mM/CoLN6KJgeZ296e4Lh891Qdh4j0EbfW
                    KRzwATsnawuIG6i4m1lZlmcpIn00pqpt/C3HLXQhyszMNhoSTtM86hnTQ6U4BAukMTZFQo6
                    FZBFQo6FZZEaRSjRUVlHp4aim13pa6UUGp2hSRR0qZHQoUVZZHSQY1G42oc6MVll2s8Qt4b
                    DJf/ABLll4ZpbOVW4MxYTyH6vyisP9onDswTG2X7yw+mYEnViTMRCifCeciCBpUnsBez2bt
                    nEDPhdoP/AEyQZIjWDOw6E9Zv7HZ9MJKJmu4S8PxLbeID/GrDYxH+YDyFQaCywz9+XHh04h
                    0LP8I4+MMuFs3b+fDOH7zwu2UKTkKggOvIRtoY6nV4y2bN1Wsktbgyx3QkAhXB1AIPMcxQw
                    3YHC2nF+3lMeJTczMoG4YAMJ02MwNNKm8Yx2GCGypDMZfKkbgjU7DLqBPLSuh1UVHgsFiAM
                    s7ATlrmeKzw0WAiItyHZ9FX4rD4a84vGLd1BupMEETlzLrBn4G61EteNilu2RoNlPMgSSRH
                    xMAANT9BncT2mtlkGYWxmdXXKSVyxG3InbTr7L4vxHEXsOLNhFa07I7gr43A8SBmLQU0BgQ
                    dfWoigGHFTEn0G9ulp4iLlO6u5zcLjb1K0d7F4bA3FXFXC97KCLSLm1mFUkeGZ1IkctxWf7
                    bMVtvnJNy9ckgxIMhvaAoWDrETVZdslH+9YlAgXKLNhTuRsAQSVCjxZtdY8gabiGPe8QWgA
                    CFUbKPLz2knUwOgqpbgeYcXWAkiJ1sNBN8zpJtCUgEwMu+9FCoyKEUIoLLZ8BwJuJc7uLOb
                    KSpMhYRSzTMjVWIHS5yiqbF8RMpbDtcAAVROg0Ehdp9Z6UOz90nvLAmHE6GNFnMpgjRhArZ
                    4Psa1u21++1nIE/CZF8UsRlkgToJ0M6kbVCmXsc4OMiwHkBJnO/HWbqtVlNwbhF4vzns8is
                    /wXDWmLd6bqXNe7UxleQQR4QSCNw0gaeVZe+5JMszQSJgAfL0/OuicQ7MvasLf75jdu5SGI
                    IywASSpMdNNIBrnV5pO8x/Denpgh7nSYMW2PDYcPZK6MAbFwTfhx78s03QoUKokQoUKFZZC
                    io4oVlkYFJp3umy5svhBjN5mSB9DTZFZMWkRIz9VacLwbPauDxDPlE5SRCkMdfXTerJsMmH
                    tsDrp4yee/g/d7x1ljCYyXHdMdhlSDIOgiRyA2I6cqZu8TAuG2ys0HUzyEljtOgA+tKKf3Y
                    ibZxx49Le2+NSGwBffgrDhrtmbOAMrHKRsQBoAf0tennR3wC2wzTqY89RNV+Ax4Q3L7gHxw
                    irsdAAB5Bf5mrE37bx3bprqZYBp5yDqN+QquK6lmFUcbwsBWB8oiPOqmK1YSZkgjUdQfnWd
                    x1pVcqswOpnWs7dEHRRqFCgaWUyTRUdAVlk1lmlimg1LLaUUoKCPypyowqQGrFEFKFA0KIm
                    gmSUp/C4drjrbQZnYgAeZ/d50jlWt7D44lnwr2xdtMpYIRJVpVTHkZ1HlPWQTF1ogK94Z2b
                    u4YsiqGR0yswmS48StqYCiWA8iZmrXgGJM91cZ1XYQSsEn4T7/Ik9dHcFbTDn7vYJV7niVG
                    OZVPJBJ0zRAE6EjaapeKcSW2GuXWME66bn0FZgLgR5/1SyKxmH7Q4vCs2HGIfu0YoUJzCAS
                    pADA5ee0VM7aP3Vy0UYq8Fmj1ABJ5/Cd+lRO1OEnLi1+G6fFv8R1DagHxCT6hjzFIZDiAcT
                    dOrXgpjYArpA6AlarTplzgxupHqiJJAVIxLtJMsx1PUk1vOyt8Kpu3LhfJAbPOQKniKKOai
                    dYiSfScc+Ce0xDiCDA89JkexGvmKkXMTcFtbJ8KfHA0zZtQT18vTyoOBYS1wuJtsbhENOqd
                    45xV8TdN1wByVFAVUXkoA28+pqvBo6EVFrQAANO+91RHRxWu7D9g7uO/FuXBYwwP9o0S8fE
                    LYJExsWOg84IrY4n7KrF6ful/IFXQ3LguNcje4yqPAJ6H2FYkIwuS4TEtadbiaMpkfkQfIi
                    R712Pg/aK3dtrhmum1dACkTAbQFiNCzQG2BExqRM1n2+zMWFZ8XfZbY0GQKC56L8cz1gDqe
                    jnabs0uJsWriBrbZmC51MRpk8UDOIBBZZ5elISCYT/TeG44tl57c1H7UcVym5at3GuOqMxY
                    lmCztOdmIJ0hZ2JPSecxWws8JNnBXbRHjm4Wj9LLIWOZGk+9TOC9i7XdpfxJcyJ7oEAMeSk
                    xOUaAkHXUDqGBAU5nJYIGrPhnAsRfKi3aaG1DsCqRMFs5EEeQknkCa6Newa37oY2rdwnUZ7
                    aGMubwDT4RmPgjKdNNBDr2HvMScUloiB+Jbe5MaAA22AAAEABYgUn1hlrsmwEX0XLOJ8Pax
                    ca24Oh0MFQw5MMw1B61GrT9quC3lvBnvpfDDwugI0WPD3ZAK6t6HXWZqqXDXbbeK21pWmCd
                    S06b8hHTT1o/VbH9XTS8HUqAOAOE6x2ANySOEmyrKEUoClWxqKobLkaMUDdHdsuFBIKq+q+
                    eXnH7X1pqpGNckgfqiB7kt++m71nKzLmBy81Mj50rXSBPfYhX8RSDHuwSWiBJ3IkjTUOjhm
                    js2gQxYwBHKZJ2G/kdfKpYtk21vlyCGVFzZm+EHNEbg6abakVCtvEgiQRHTzBpdzEEqF2Vd
                    gOp3PUmu1v0g2TnBGRzJiTNoA21hSGGLjT138h63RYl1J8IhRMDbfUmJMfwAp7hDRcGgIII
                    M6aaHQ9dB9aigVb8Ow+VQWt6ydTvHof4VzASVM2CmEifCDHmf+KocekO3PWfnrV/cZY0GtZ
                    l7pYknc60zglbmk0VKoqUJ4RGio6FZBRaUtJpZ8qZIErJ0ok6UAeY+VK320NBFOIaFJVtYN
                    OUE4ugNql8Nx72LyXrZhkMjoeRU+RBI96j8qewlkPdtodmdFPozAH86Xmniy6fjbq4q3ZxV
                    nwyoUqdGDA6KIHiO8RqQBFO8bw+dVxAIzFst4Lst0CSSejjXTQMHEnar7jLhLL3EHiQhEjZ
                    WuKxLeHYi2rQTsbikbVm+B4pFc2rxizeGS4f1f1Lkf4Gg+maj4QvcwVBppqQTlPQi2caSoV
                    mw6FlsXhbtzELauH8G9+GCJIUkSmm8hlU+YB6kBji3DDZwRtCGZWlmGk+InN7CBWh4rwm/b
                    e7h2lbiOMraaZSrrcnQBTAIJ5ETTV7idqyF7+cxEHu1lCY1iSCw+QHVqrUbhJOYhDMQqXHW
                    fvi4d0IzRDTykwW84Kn5iqnj7r32RPhtqtsfsb/ACJI9q0nF+Ji1am2hBufAYVQgOuqjZoM
                    gDSZ354x1ireNc/6x+oPusTzwi/esrpeXOeXEdEBQK0qyhYwoLeSgn8qs+H9n8VeOW1h7hP
                    mMg/7ngfWuNKSIkraYfGhksMwz24tAoT4YyL4SNokBSOc1sm7TPfUqe6UAT4vCFA3CnfXQR
                    z0rG8I4aMIltcaHdSzl1sMD3KSss77M4JJCofnBAveK4XCW8rWLj3lIXS4mVpb4RGVSDEky
                    BEHfYQkTAWFVptKrcT2gxFzEMjMptgAroZiF0GvUa6bCKnP2lxAtsiwRGiiEHoMgEVR8RwT
                    G6pANorrluKwYf4dJlTyNXOE4azsAcgBEhmlF9ANz9KURNhn3nl6roLy4AzlYe+WoPL2vnM
                    DxlM65rAWD8QJfXlIIiK0i4e5iAbmfM2sKARIERB22I8qjvgCvjLJBYybcbA6GBGaRqJ39Z
                    o+K8TFi0SgygbCfEzawWcak7nkAJgUrg8CGQD5nyP8TVvEfUeC4E6RPt3dSsTh7lsW2corT
                    CqGCn0gmGPLT5U1ib3eXGZkFttJVRlAIiYU7TufWsMLd6/nukPcj43MmJ2BJ2Gugq/4PdN2
                    0bVzQNauotyTowXKuYRsCynmSFbStTa4CHEGNpEeqXxNIAYm+/v31VT2xVkuI9t2YlJGbLo
                    cxBAygCIAPX1peLvYvHm2FtgmzbMhQAWMgnxMRmbQCB0MVY8G7OjMBiDIBIGQnSd21A5mY0
                    qbh8ZbX8NSohyhBBSGWZXxDVpB60rmNLw4gSMjzt7LopeKw0AymC4gTwbFybX1vplK5xiMI
                    9tslxGtuN1dWUgdcrAGKlGyqWe8I8Vwwk8lVpZo9o9xW47RWhftiyxbwsGVZ06Nz0EGJ9PO
                    uf8AEL5cydACQoGwUZVAHyNVLi9wHVL4bDS8O6qQJIIbvnhLhpbIbu2wlQ2M60dHFCK6Fw5
                    3R2rRYwN6kf0fcESsA85GnyNSuF4Z1bOUO2k+flvVgSzanRRuY0A5kmnDRF1Mugpq3gLcAx
                    qI1mNuo2mpC5j+jM7ab+lV/wDSKRMHplHlzk7A+9Qb+MdixBKgn4VYgDyiti2WDCc1Mx2Ny
                    SgQhubNy9F/eaqMtOMxO5J9daTSzKcNhFSDvS6RWWIRT0o6GXSaMUZWhQ6FChTKKUppxAAQ
                    SCVnWDBj1gx8jTYpckeYrIhbHgvGeF2ypuYEu0f9V3uKD1IV1B/7atF41wr+7Wf9J/8AbXO
                    sk6j5UdpuRqTqc6nvyTg7hdFHHOFf3az/AKT/AO2nV49wtTmGGtAjUEW3BEagg5a5xNS+H3
                    FW4jXJyBgWgAkgGYgkAzEb0n0uJ9PhOI2913Dv7TYe4FslirJegzmbwtaLCCSYDqPpVL9+w
                    2o7lCRyGYgHzO3sJ9RWM4j25vG4Gw6LbWfFmAY3AZBV+QUgwVHU6mtVxzB27NzJb/VErJJB
                    k6yd505z+dToteCA8m/LTyWqYZJaLefytDd4paxOHINlDcw6qQrFtbSjKSGgnMkmf8LeVUd
                    /iGAVcz8Ow2gksVZyepJjWoGBxZtut22RmUyAZ1GxBHNSCQfImoXauyoBFr4LgLWwSNBB8B
                    nmrAr+zPOuo0mEmScrZZjPSOUaA7Soh98h6/KtP/V3DTCthMOVEQGt3SNNtIqTb7S8MWcmD
                    wSyN1DKfrXPMPwi4WAcZV3JkHTyAO9RL1vKzL0JHyOlTLXxJcfP+iVeGE/5+V0XiPGDey9x
                    cRYB1i5d9swMIPLeqV7d83Azw0CFy3Lq6gkgmQZHv84rHlOtPWL7prbdkI/VZl/9pqLqUz9
                    x9PhdNKu+l+AA4wCeufllutKRigSWjxPI/rBJG5nKDPMnUeUVJwnDL2cXoAZiDqwZmCkHwu
                    +U67EgQapcDx6+gmFuR+lcVmPuwIn9qfettbxK3VtlDmzqTmMTyGo6gwpA206VmscwyD8dJ
                    9Z4xN1q/iHVxhqQfJs2jWJGUW0tMBRMLeum6y3ZGQgAkAqCdWIKNruAYEAzE1erYu5gCk6k
                    aHbf5f8AHlUHBW8hZgZYnQ8lgAQvnIJzfKNzR9oe0lu1+GpYuCCcjZcsa6kHU+X1FKQ//ZH
                    68r29fnma9gMOy3Hd1ZcdtXQFzQigEknMdNI+Bh0PzrPNxTVSUF3K0jvcxUxt4Z06ak6GpG
                    O4xcuKGQMEKxAd2UTJLQx25wTp7U1w/AJctA6hpIzAzPt/O1Gm9z2fdx79V0u8PTY4uN8tf
                    Wx4cEvC8VvtYu2YsJae53jQwUiDoFXpPLypfEeN5Ftjubb22U/ECCxVsuY7yfXX8hX4zh72
                    4LDwnZuXoeh8qf45hf6phm5hSfZ3Y/nkqbaLGOEa/H8VHeFbWc6vMkN8oBk9nUTExF1wPiA
                    uDNb0Q6Mmg7tt40HiVjsf5FV2t4XdKtezZ0DksI1QEAKx6jcE8tOulNwfFC1c8c926lXAnY
                    jQ6cwY13GsVo07R2hYKs5L5Msrrm0jSQCPcDaqlsEQuMF7CcGRseWccpjosoeJOQ2ZmZmTJ
                    LEkgHfX5/OoTt9KctIuVpMMAMo66if/AOaaqjWtBsumtWqvY0ONotwuc9ZnmSIRFamcMC5t
                    VkjUH5aRUdmmSdzUjAXlQksCdIER7z9NqZpXM9oM4Vei4OtUnGXJI1OXprE9Y2mrSzbB1I3
                    5TMeUwJpniOCBUsCRGsSY26cjV3AkKDTBVHyoUoDShFRXTCSRSIpTChFZBJaiPKg9BthRSo
                    DakoaWu1NmsFjoolChSgYqi50mlq0UilKayIS1PMfKlhgaj0paBCIcnhRijZY33oHT+fI/w
                    oSnhHyrquD4naxVtL7L4lRUcn9aTP15+Yrk5apeF4netx3dxlgkgA6SdzGx96m5k3GYRm0L
                    fW+HObsBSEkkEmIXeDznUCNz9ahXLwBOsw7xPLXKY6A5R8hVj2K7V2O6YYzDNeYOM1xbjox
                    U7AIkKSsHmJmuvXOwvC8huHDjJlLk57u0Zifj96ek94dLtOfW6L2U9CfQ/tcM+9AnfWoONw
                    SXGzZghjxQJkjnvofzj1m27Q8ewN1MmEwPc+KRcNx2ZlE6FDIWdDudqu+xfFOG3r1rB3+HB
                    XfLb74XbhzuBALKCIzHodC1WqVcQuPf4QbTaDZ3SOP/ALR0OtllLdqxlju18ydT7t/CKgXc
                    HanwsQOm/wAif313ntN2X4Vg8NcxFzBhlQDwh7ssWYKAJfmSK4px/iFnEXEGFwQw/wCjkW4
                    903GYgJq0a8o862JsQWpYgFwcen9O+y1n2P8AY9cTdv3r6ZrCDu1BJ8TtrMqZGVY0/wAYpv
                    EcNPD2vYdnAAutz1ggQ3lmQKTGnLrPR+BYqxwv7jwpo728rM7DbvDrJ8nfMq/5QKo/t07OG
                    7ZXFoQDb8NydAVOqknyaR+2Olc7xIsbTfkqtlwwnUW5jlqRlqft4Fcv4p2hLSlpiB+sefpE
                    QPrVAxPNlj/KK1nZrifDLKWrWLwPfsxJa6GZSq8/ACAQBMa6xXYOIdguEWbNy+cCjKltrhh
                    rkkKpcxL9BQFsv38IBjIFzfgDf/l7gclwbh2LIt5M23LrzGnl+6rWzxhVUKts6cl/PatKOM
                    9nCQrcOvJOgILfkt2at2+zjA42133C8ZcSD8LMXUH9Vg3jQ+s+hqf0funfzXQazcAAvGpt7
                    Ttr1zjnPHuO3DYTDhYuPLGNSozNlUdTMa+XykNeuXMLkvKqtbtEaGZFs5gSOR01+fkGFsNw
                    /HMOI4bvmVcuRna2NYy3EdN1gH5mda692K4RwriGGN+3gwmrW3QvcMEAEic3iBBBmOdNUpF
                    0RCr4bxNOiHl8yZEACBOsEgn2vmuBO4pktXXu02L7P4LE3MLd4a7PbiSpJBzKGETdB2NSOy
                    9zs3jLq2LeDKXG+EXQ4DEAmARcImAdDFEA9z8Ln+zUnoP+y4yWpBcV0zsV9nyYvH4tbsrhs
                    PedciyC5zNlt5uShRqd9us1Z8c7f8Nwd18LY4VZuraJRmYW1kqSGAlGJE8ydaKxbeJ9vLMj
                    PMDOFyLOKUjwQRyIPy1rvvYjAcIxjHiOGwwt3LYYXLJHhUsPiNvVdswBEDfSRpwq/hiWZli
                    CSQCdROupgA78q0EoHCBM93yuZ/quMLZZ0FxAYM6TqIMH19aLMwMGflVVZwt1gviIAOniPh
                    3kgDbnU69xNZm7bZX5lSAG84I504c8flkomm134+6LiOBzsMsA8/P5VXHA3M2TKWJ18Oug5
                    noNd6uSYaRqCPCTzB2NWF5wAFGggT5nmT7zHQH1qgYKhEdUoeWW2VBY4TczLmUZZBPiUiBq
                    R4T5R71aYvA2XJItBJ/VY/l8I9hUkOWJYxr+qAB8hoKC29YAnyFUbSY0/dfz/wAIOqOOSpb
                    vAZYZX8J3zbj0gQfeKi8YwWQgqpCbDWYMdd+U/wAxWiD6xPr5cqK9aVhldcwkSJImDO41FK
                    aY0QDzN1kFGhps1o8XwdWU9wpDfq5pBEwdW5+9Zm4cuh3qRaQVbGCFFoUKWqE7CmXOkUKkr
                    hTz0+tWXCeEC7cyTGhaTrsQIjTrQLgE4puVRbtk7VOtYeAY3G/XcA6eU1qf/T1tAYOY8pEz
                    sTp7/SmDi8Pcu3VClLh8OYjSQ0HUTEkClJJFkQQ0rL4oRcIOg0j0oRU7ivDwrkM0EaR1joa
                    auWAIPIjQjnv9eXtShwgKpaZPoosE0hhyqddEbb/l/wA0xlAogyg5sWUjCcUuWgFBBQEkpA
                    EzvqBM+9elLXHsKcB3f3+wbjYbKA96wIZrUAGIjUxrXl50Jrv2E7d2VwYt2eHYzvBYyrcXC
                    rlz93AeZ1GbWYoFPTaTluP2uYXezrKw/EsRzjE2Dy6rcPOpHZvAXFx+GuwMi4i0zMHUgQyy
                    TB0ECZ2qG/2m8WBj72w9Ftj8lq07OfafxI4myr37l1WuIDbVUzOMwlFkalhpuN6EP3nonH+
                    nnIgzoY8rg+6679p+XFcPu2rF6yXLW21u2wIV1J1YgfWubfZR2f8A69398E28PLLkBuqbmw
                    k2wwGUEtqRqFjnWw7d8dxWLwVyyvC8Xakqxe73SqAjBjJz+Vc9tdr2s8MxGAUKr3LqkMGT4
                    CB3itB38Cj0c9KznkO7+UadEOZ+Jtrt6QTFxkZWr7T9icVjMbcxi4u0pJBtjLiJRU/swPw9
                    xAJ8yetdRuIuIwxsXxmz28lzIlwrJWGKkqOeo06V5RtYm2fiUqf8JkfI7Vtfs57YYnB3Dhc
                    PZW/37jLbdskNEHKdhIGs7wKIJGamcJysdL6+vttplRcY4d93e7hroUPaLKCY1EkTBgqCsH
                    zBr0biMUjYBg4uBDhiHY23EKbRzEyJ0E1y7t5g7l0jFY/hK23aE7xMURmgSFYKjCYB1I2Ec
                    q3OIxGOOAfvMPYFn7u2Yd8xbu+6MxCRmy/WkDokfpdLvCwGuEAEiPuEWzAOVpsNLLzniWCm
                    BdtvGxGf/wCSitr9ifF3s8RW0D+HfDIyiYkAsp6SCsehNZG791jMti6vSbyNPt3Ux71ofss
                    wxucUw/dIZQs/ifwgKjblUMbgbbmmlSZTBJILQL5Yso3I23IXUvty4KtzBDEgDvLDAA9UuE
                    KV/wC4qR6HrUf/APHs/wBTxH/7H/1Wqsftgxzpw24t4IBcZEGRyWnMH0zKBshqr+wYucJfa
                    3EG/JzzM93bnbSKoH3hRNP/AMWIkTlnpI/cj/CyH2l9kcdiOKX7ljB3riMUyuFhTFtAfE0D
                    edah/aBwj+jrnDe7REv27Fu5cKjRrqOCWJHxaiJ51edvvtB4jhOI3rNq+vdoUhDbQjW2jES
                    RmiSedU32rcbXFtgbsrnbCKzhDojMxJQ6nUEHQ7aVgJI81jYG+29suG05Faf7E+1a3MRirN
                    /Kl3EXO/QDwqzGc6Lr6EDpPSrPt59kSYp3xOEcWrzks6POR2O5BGqE69RJ5VyLgnZ27iLGJ
                    xdm4FGDCufizHNmIKEDcZSdxWt7J/bFi7ACYpRiLYIGY6XAIH6WzftanrQMZLXIDzmd8jYR
                    yMHWN5VfwW5jOBXrvf4c/jWmt+Iwh1BDq6ghiNdP8XKsrbuaRzr0tw7ieE4thmysl22dHtu
                    pDKd/EA8qehB9DXn3tdwcYPGXbJ2VhGVs2jDMsEgcj5x50WmL9/5Qe0uHLTmcwdueW5lNYR
                    iBJGh2/fTquCxJ6aVXWuKXVzBSACdAQDl5CJFW1rHWrtotclWtgZiIMzpoJ2J5cqX68Zi3e
                    iH+nMZprC4ZSxYSAN12BJ8uWx1FTM2tBbBUSCCjAHN5cvKYmj7wREc5kjU9OX8+wilKuwmG
                    xxJ0HnqTp5oGi+JdPBKt2ybiwZDOqwOUmCZ/n+M/j+Ot4ZM1j9FgFJ1zvIbfmqKD5SQKjYf
                    DM0AeEby2ny51E7QcHuXmtragIqwC5K7k5vBB10BnpA5VKoTUfhYZAzOnKd+9UWswCX56D9
                    n9fxRcF2kN0lMRbNxmYd0bQVGVjoVjYhvPX6Rd8S4V3YzFydJyHQRAnWILBpET0qpTsNcZG
                    K3AzASBlgHykmq/s5ad3vWbjuO7tlltkmAyukiCYmCfnTiWcFMgHJWTEujAErmBAPPlrvtW
                    Y4vwtrD5WfQgEMAQD1AnpWvTXfQfzqOZqD2ydXt21BE5ifYCD6bj5VV41SjZZq3hQPP1/hT
                    0U4RSVSuQu3XotpgWASYqy4YzWmW7kcjYwrEQdDrETz9RUO0sss6CRM+vlV3fRge7DQFPy6
                    RPtTNbiUaz8AiM1fW7oYZlhgdfoOR/fWTv4H8S5aS5bDO3iVgcyz4iqmIYHTny5Vc8PjOdY
                    lQPORoIPz0pHFOD2r11WZ8r6TBHiUeW4PKfMU7SWOsYN1zYjojxuCBWD4gNC5j4hzI8zvHt
                    Vd91QKVOVYkls3kIInmPI01xfiptQqkycxyzGUSwXbWSNfeitk3LDOQcpVix9NDEnr+Rpfp
                    NN031XAQm1tWGbKBd+DNpBzDrzMnpAFVapJ/dV3grWhuZ8zvBzQdh8Ig1Ui4xMzqefrTVIB
                    +3LimpwSZ0V3wPsVjccAcPYLWy2Q3CVCqREySZ0nkK9QHh/wDVu4DR+F3Yb9jIDXlGzi79s
                    Zbd+7bG8JcdRPMwpAn50P6Vxn96xH+rc/3UWscBki51MnM9J/eiX2l7E43AgtiLBW3myi4C
                    CrHWIIPMAnWtV9mXYDHNjMLirlk27CMl3vGK+IDxrlEyc2nLnWLxeIxF1cty9euDcC47sJ6
                    wTHOgvE8YoCriMQoGgAuOAANIAB2rFrkGupydO+f76r039o/A3xnD72Htf2hCsgJiSjBssn
                    qAR715i432dxWDZVxNhrRacoaNYgGIJ6j50P6exv8AesR/q3P91RcVjLt2DduPcI2LuzRPT
                    MdKC0MAi/CwG3E+kZpvDLLL61ZrbbOHDFWUgqVMEEGQQeRB1pjgWGLX7a7zm/8AYxraWOyV
                    z/qEL5DxH57D60jntabrYTErrHCcenGOFspjvguVhtF1BmRvJW0PoSOVaG3bXE4AohyrdsG
                    2J3XNbKEEdVMgjqDXEuyXa6xw/GoiEtachL7zKgHRT0JViDI5ZgNzQ+2i1iMJjg9nEXUsYh
                    e8UJcdVDT+IAAYkk5v26LTN/L4VJlkTYGRa02B15HkElfsW4mznNcw41+LO0R6BJrd9neC8
                    P4Dae7iMWpvuIYiM0b5LdvVomJPOBMVwq3xrE3DkOIxDT+j3txp9ppm5hGGrAgnrofkdaxM
                    FO0MIhuXC3uXHoBK6H2o43f4xfCWMO90ICbdrwyFkBrjbDNt6aDzPS/su7L3cHgyt7Nbd7h
                    c21KHKMqqASAdTlnQ8xzmvPlm/cBm3de20RKMVI8pU7f8U6cfi+WLvzzY3bkx00anAnJc8g
                    WfIPIRGkZcM5PHNdX+0b7L8Vi8WcThriEOq5luOVYMoiQcpBBAH1rO4H7EsezAXbtm2k6kM
                    zkjmQoUSfUisVa4xiiAfvWI1k/2t3qY/S6UDxfF/wB6xH+rd/3U4a6Ld+iBqUj+Uk202/8A
                    uF3rA9luG2LuID2raW1WzblmKgs4eSTO7Stcz7R/ZJjbFxvuiHEWSZXKyhgOQZWIkjqJB8t
                    qxuI4niGQ23uuykgkOS0kbSW3q24R2sx9hcljFXUTkkhlHoHBjWdqTAR33/FWpXa+JJNhno
                    YgxBtlOs6iwW++zjsH90F/GcUtWkti3Cpe7t41DFzuF2CgbmTptOE7ZdpxiL7DD2ks2cxyI
                    tq0sgGFaQgIkalSTBnXYBGP4pjMYR94v3b0GQGPhB6hRCg+1VXGbITIsjNBkDlJETSPAmDm
                    jRqOb+EgdPIX675QoN2/m109gB9FGlaDs9w/Kvf3BC7ggK3hG5iZ9t/DWY9qs+D8Uay0ZiL
                    bfGogj1CnSawltx36G/kg+XBbWylsrnXKVmA6ARrrpzHI60rDWFDEqEB1kxJ3IBBOgGh5Hq
                    CKpPurWEJtuj22W5dtATDQAWUwdQskwRPpVb2X45eOJVMw/EcbywTRvCoJgDYfsiqODCQTB
                    gbR3eQohzhZpMd/K3CW5nWBGZnaYiPiZj5ec7U1g8TYuz3eJDQYOVT77g6a7zHtrVdgL7Yo
                    H7reFskgvaeIad/Ad01/R8PlWh7M9nhhkyo8s0l3VFGYmNFGoCijUfh17tw7hI1oiymIQqo
                    CyFYYyCJ0GhETJ3M7CDWD7VNOPt5QFu5ASVJDHwEjNrvAj0YCtdxztBhsMSGIuXBqbaQWLb
                    AMfhTTlvtpXLrfE3bGd9cQuzvqokEhpTKvsYHoKgwg3F+99fJOZbc25rR27IXzPMnUk1JwW
                    BW94XVXgTLR6fWaZKAE5c0cgxE7RrGk+lOWW0iWHPQka12FTyKzEeVHkp+kNXmSvZCFqxm+
                    v0ifz+lWty5MEzMAHfWOelRsFdUjK7QRGQkaRtlMfz8qegRzMTMQflG9dVMjDK8zxBdjMpq
                    7jAoMHxch0PX23qtw7G2wZTBG3886futJJiPL0/fUb1qJeXGV2MohjY3zUzGY63e/tMOpPN
                    lYqfy+lOHHWhaNtJiAMrL02EiRE6nXrVc4punDypu8O1OHEMd3aOgJA+Q0p3C2ogwAOQ+tN
                    W7U6n5VYToNCNBO3TWnpAYpUq8taBa6QEo1tEECPX2pV4hVzTz0n+FQruOJIPQzpp/Okj3q
                    j6mjVBlOblSGImBr6UqDAJEUmzi5OZtukDQdeU/81IswfEDPLY0G1pMFZ9EtCrsZbJggesD
                    WoTW6vrqVCxFgsSFAkCdtTzPuBr861SPylNSdP2wl9ksatnGWLtyciPLQJ0ysNhvvWh7Xdr
                    3xc27Sm1YOhH6b9cxBhQf1R7k7VmOER39mdu9tz6Z1nT0mjFc72DHiOf8Aldnh8NRp1Epnu
                    hoK6RgsX/SXBWw92GxWAHeJOpe0oytz5KYP+VOtc+rVdhw2Ht3OICS1hmGWSA9sQbqHqGUx
                    zgieVEFUqYWiT3z8pHnvCxLqrsqog1IAgakkwBV9Y7P3rhVUtwsLLGAASoL+ZhpGnQU1gsM
                    oxixAU5mtjcHwsVE+XI+Qqzu9o79oFEVIUnkSTqfOPpVCcQAbln33uFxkP8PUc0xiBI6bc8
                    +hR4/A91cCIpYKkHSZ0OpjnrNUeIvdTrsJ3pd7tpdZpa2h66EE/IxTXEMTbxEXbYIcaMnPx
                    EAMI36e4p2yFy80VlQBS9KVd4e1pR3hh21FvmF18TdCTED19mQtUZWDxLMu8vlK9hYYdn3n
                    8IXANKk4PHJbBD2886gdOn7/AKVNThq2bff4nQfo2+bnkD09Om9Z+87OSzRJMnkPQeQ2A8q
                    5jXbVkNyGvHYHXiuxnh3Mgvz2+dlY4rj1xtEC2x/h1PzP7gKrESTqfmf30QtNyB+VSLOH1B
                    PyiaWGtFlcS43SFtr6+gJqM661bC0x0UfPSnE4eYnKPp+80W4jkJWfgFiQFFwhbu2IlWtfi
                    W2HLfMnodWjnlI500MI9rLetnxWjaYz1YsQfQFQP2qtuHBbbEOwyMpVlYHYxtprqAZ9fOrP
                    DYMrcvXrxtHDvbyZVYvm2yxkG+hOh0+td5pijSeHxiJGGCDb/cRG5IFxuN1GowAYt8teeU+
                    qj/Znhkz377EAW0ALGIGaSd+gSPeme0Pam/fLi3de3a/RRfDI6sRqSehMCYqPdxShTasIbV
                    nNmKkkljyLk9NIXYeZ1qv7qdt685zg50lVp0C1slU6XGUyR7HSrzhdkuyuuw11/L13FLtcJ
                    uNMgL66/KKt8JhilsJoYnykkk7e4HtVwzFmFDHgBAMpSoYGvTl096mcJ4e112k5dNxtpGn1
                    qPhbDwCVMnWrRuEMyoO7W4GzN4xoIygRp5n61Sq8NFzCnTEnKYWPiiio3eEcz+f50tcR1Fc
                    GAr0sat7NpcqeEZonMOfIj1B0P/NOEVAw2OMhF/SYAAiRJ0ny5VZW0PM6/Sr03GIXDVZhKq
                    ccZc84gfIAf8e1MlaucRZSCzDQa6aH00iqZh8un871Fwgwuyg7E2Nk2aRk1qYEUWrlw5vAb
                    cgECVYsrbg6zlj3qzvdnnNtb1hhdtuMwkZGjmCCYkGQdeWlEXyRe9odhcoHDkzEzyGnv++p
                    PdaxNRcDYJBYu2hjKCRJEamOlTQldFOQFxV4Lyqri1sBl6x+/wD81DtLJ9BVrxbA6G4pPmC
                    Z8pBP5VU22ikcSVSlhgKYyRqKdsX2UwomeXXzHSk2mkUoLlMgx5jeoqz4gykHEEOx5FjI94
                    586dvXFiQdRqOvlttTDCSSdyZ+etJy104rQV50QZCXfxHjW5MkZSdOa/8AgH3qFxdnt37tu
                    T4XdR6Bjr8ql5KLtRw57bLcc+JvC4mYZVXnzBBB9ZpGtAIHCPaFYVHQ6N5956mE3hLuZZNd
                    O7K2QeGgAfELs+ZzuP3CuWcPOkdAD85rrnY9IwFv0uH5u5/fSOtK6an3U2zv8rmGGdmVFWc
                    6ZnQ9Aq5z8stTceZfMNnVW/7lB/jWncYTB2u6hjcvIA7xJVbg030jyHTXzzvEMJ3eRc2aAQ
                    GEiROddDto4paHiBUeQBA045yf4p+IpOaGlxk5HhAsOOUTyGiqcTglfXY9R+/rS7CiwAUMP
                    IIbnoZn/in1GtExTRgxZtoywFjbUnU+0eZroqOAEHVc7GOcYap1rFGzmLqlxjBuG4MxzcwD
                    OkSF9VNXvZ/EWLqG4qW7bLOcBVBXzk8iNZ9elZRiCIPOjVoEDTSNOnSvMq0BUbEwd9OmXxb
                    Sy9im7ARGXr1T3ELhvXC7MWEnIDsqzpp12mmlQDlRZ6Aq7RAAGiTWU4KVNIFSuG2VuXRbd8
                    imSWgnQbwADr60DYSsTdPWrUAdef8AP0qRbSBVrjMEry9lswkjmJjc6ga1Xpbkgfz+dehTq
                    gAFq8l4IJxZps4dXIVhIn5TSssQI5aR5cvrV/gezzAB33PwqDzO2tR8bw4oTAIA5Egx78xQ
                    b4lj3/ab9+Z8getk7qL2tlwt35dSFSvhwTJAJ8xNRBwkKdW2IkRvz3HlzrQ4bBk6nb86ZFm
                    WiNao9zX/AJCUGOcz8Soqj/x0omSrVMCogseYBjTcgdDzPSrnEJZwtpr7rmCKNhJkkAAA+Z
                    Gs86563iW07RJOQVKXhzUvMDdZ5uIrh8neDRh+qWOkSAPh/V3iqHtD2ruX8q25tW121IZjE
                    SSJj/L9Tyjcd482Ju53GWNEQahR68yZEn+FVa1AtxuxvF+q6mtDWYQV/9k=" 
                    alt= "Hades"></img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> Hades: </p>
                            <p className="jogoDescrição"> Desafie o deus dos mortos enquanto
                             você batalha para sair do Submundo neste jogo roguelike dos me
                             smos criadores de Bastion, Transistor e Pyre.</p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            {/* <p className="textoPreço"> </p> */}
                            <p className="descontoPorcent">-57%</p>
                            <p className="valorAntigo"> R$ 69,99 </p>
                            <p className="valorAtual"> R$ 39.99 </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgA
                    BAQAAAQABAAD/2wCEAAoHCBUUFBcVFRUXGBcZGh0eGhoZGRoaGhoZGhkdGRoZHhkdIywj
                    HR0pHhkdJDYkKS0vMzMzGSI4PjgyPSwyMy8BCwsLDw4PHhISHjIqIik0MjIyMjIyMjIyM
                    jIyMjIyMjIyMjIyMjIyMjMyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIg
                    ACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEQQAAIBAgQDBQUFBQg
                    BAwUAAAECEQADBBIhMQVBUSJhcYGRBhMyobFCUsHR8BRigpLhBxUWIzNTcvEkY7LiFzRD
                    osL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKxEAAgIBAwQBBAICAwAAAAAAA
                    AECEQMSITEEE0FRYRQicYFSobHwBZHB/9oADAMBAAIRAxEAPwDN3sSsHTlptXsNbAExJO
                    5oa0RuROlczeVenqO0vxZXaBP0oeamtonXaqnBBg0uoxIEk6b13EatpEx1jrVWavK8Gd6
                    GoJ4muE17Umpe7A+I0NRiAk7VYtvrXPeclFeyE7mtqNRN7oHOoe8J2FdKqokwAOZqVi3d
                    uANaw2Juqdmt2XZTHRo1pXOuQOSXJDITua7AFBY+7iLQJfDXbYBgm4jrB6GQINBJaxFwB
                    lt3nU7FbbEHwIEGkeRC64+xndxqLz/XhQd3iXQeulc/uLGaf+HidZj/ACLmsGDHZ5Gh7W
                    AvOCUsXnAJBK23IBGhBgaEdKV5Da4+yNzFOeceGn9aomuXWykqysrAwQwgg9CDsaO4bwj
                    E4mTh8NduAGCyIxUHoWiAddppWzdyPsCr1Pn9i+JDfBXvIA/Q0su8MxK3VsNh7q3X+G2y
                    MrtM6hSJI0Ou2hoWDuw9glerSN7B8UAJODeB0e2T5ANJ8qX4X2cxtxmRMJfLrGYMjLlzf
                    DOaImDv0Nawd6HsV16tO/8AZ9xQb4NjpOly030c691Dn2L4kEe4cHcCWwS05QYAkkKTmb
                    +EGhYVlg/Igr1ahf7P+KEBv2NobabloHzUvK+cVZiv7OuKIf8A7XOImUuIfLVgZ8q1m7k
                    F5MnFdAqx7TKzIysrqxVlYEMrAwVI3BB5VfbwlwENkMAg8ht3EzWHUrLrXCXIksF7omh8
                    RhGRsvxTsRz/ACp2LpI3qKSDOmlFpG1Cc4C5E5fKRNDFa0bsTSe43+ZmI2YSPCPyoSpA1
                    FuH4RcYSYXoDv6UxwSvbXIQGEyDzB7x40cmIUiRrVWRiM+gB2HPWjsuAajjGfrXcO5UnT
                    f8qrcAAltfKqlxQGynzNZzS5Nu+ArLXCtDpjO0AV3MbzrRhWhrT4FboEmrbCSZ5CoLbJ1
                    oi2kCK6bLEyaqu281WE1EmtZgZ7B5VE2D3UTU7VhnnKpMbnQAeJOlLZlFvZAaq22wrotj
                    nrUrzFCc6MAATIKkEjkCJA669NqV374ffOo6Bsw8xAmkcw6GudvyGXcbbXSZ7l1/pQN/i
                    jfZAUdTqfyobJRnCMCL2Js2W+F7gzd6r2mHmBHnQ1Nksk9EW34Nj7D+yQvBMXjO2p1tWT
                    8LDk7rzU7heek6GK33EfbS3h+xbT3pXskCLaKANAsA7REVG6DkYJAOUheQBjSvj+PwHEb
                    1woti+igwBlKjxL6Az4xTzgkeVhzdyTlN/qz63c9t1xCizatkPd7JLQVQMSknfMR8UREe
                    lPbfElsWsqqzi2gVFSJYKIAExroK+R/2f8LvW8Xd9+WHuABlJzDO40g7GEzfzCt1xPF3E
                    C+6te9JPa7QUKIJnXfWBWjjTQmbLU0o/wCRnifbQW85fD3EAVihYgZ2Gyx9mZ7+dNMPjV
                    t2l7Ik9p+Qzuc9yBzOZmNfLPaxMTiBYU22tr75VYq2yuchmDMaitjdJgxvBj8BWWJNgy5
                    3FJKrfp2j4l7ZcQ/aMdibu2a4QPBYQfJRX2H+zfii2+GWERO1Lli2xJuPJ035DwFfKr3s
                    Zj3dm9x8TE/6lvmZ+9X0v2SwrW8HZRhlZQ2YdGzsSPWhHHb3Q/UZlGH2NDbEe0OL96wFk
                    tb0gq6LIgExIJGunlUMD7Si/fuFLYS4tq2st2mykuzAE/vb6awO6grz4v3jBLds2xGVid
                    ToJkZus8qyHBfZnHLibuZcgYF1uZ9AQxCqCskEhjpyAppRSapC43qg9TSdcp2/2fScZxr
                    FpBtpbcfaB0YeAkD60FjPbopcUC3E23LW3JDBgSEPgdJ050v4f+3LcVLlpXQmC+ZQQOuh
                    18Ik0R7WcDTEYW6GUZ0R2tvsVZVLDXcAxB7jWlBPdGhk0tRkk/lMb8I9qziFLKgQqYYfF
                    zMa6brHnSv2i9pb1q4Eyq9t1kB511gqckTy9awv9k+Li7dtHZ0Dr1kaGn/9p/C/eYVbka
                    2nUk88jkI3zKn+Ggq02kM9s1Ph+DW+zftO97DoxKkiVY85XTruRB86m3F8YHaEtPb1ynV
                    W20nWIB369a+bf2Z4xkuXcKx718tfmJ9BX0DGYW8VHuioadc+xH5zFFRi1YmSU4ZGvHzw
                    fK+MYonHYprqqlxmTMFEAHIJjffffWaHfEAiAw8tTWm9oPYjH37zXg2HJKKCMzKWKggfZ
                    iYgSTWawOGDL8JW4GKOGElGX4hHlXPNuNs9PDOM6inv8EbZBMQfMb1aFo5MMQw1BYEz2Z
                    UrESD4855daBvI0M4I1aNIIykFZ8Tr6edcy6h+jslhXhkglc9wCR2QW5aCfWrLaNsF9IO
                    nPWRt+NE2U1ntHl8A25nRz6U6zRatkZQaYM1sgxpUgTlAPKrL3WCCeqvA15kCIqm6crMC
                    SYJG4AEc9OdB54ICxyZRinEFRvNCR3Ufh8P7wxEGZnuYEgsY227yeYr37IMupJOYiQRGh
                    iYPgai8yfJRQa2AVGoOmhB9DRhxn7vz/pVf7OY1ZB/F/Svfsx+8nqaom1wSbi+Q8mok1I
                    iq7bhmKgiQJJ5KO/vPIc/WvQstFNukcdgBJ0FC3cei85o8oOnrrXTaU7gelTeT0dcekdb
                    sTJinusETSefQczWrwWVbZtTEjs7kk8yY69aBtW1tzlAHhSt8bczsyg6mPIbfrvpddF8e
                    JY0N8RbAEMIjeR0pVjuHZyDbUA/aXadiCBtMHz08zbdy86XHYAi0pJBOxI7II3M9Bp3ih
                    MRjbiMgZMsqsTzUZiD3znH8opHJAy6JqmJyhBIIII3B0IPMEVPB4j3V6zdmMr79JESe6m
                    HFYa5I3CgE9SJ/CB5URb4ahSGWZ3/7pkzyssd3E3OH9pljt2zPVSIPkfzr2M9qVCj3dts
                    3MuQAPACZr5+OFMmlu9cQdJkDyqDcHd/9TEXGHTYekn6VXunD9Li/j/ZsuEe0CxcdrYZ3
                    eSUYKMwVUAMg6BVFF/4iP+3/APv/APGs9/8ATrF5Q1lWyHWUvIQ37wAbWaBf2TvI0XHxC
                    77ll/8AcKRdSnwxn0mJu2v7NHjvaI57Q92AM8xm+IhTA206+Qoz/EZ/2h/MfyrJ3PZhCu
                    r3WYfCS8meUct6EuezLrvcua/vTRef5B9Ji/j/AGbj/ET/AO0P5j+VE4T2mt+5RRYzOAw
                    LhsoLTvEGRmzeg66YT/C8KXe5dCASSXAAHXUbVfZ9nLIG7RBP+odhBJ7J7x6ig86GXS4+
                    Eja4fj913VEsqWYwACZJ/WvlTLia3A1tLcPdzAuZIs2VXtEnrJAGupGaIANAezPBlwVp7
                    qqqXXGr3GZvdpuFAkks25AjdRvTJ0RrPu3DKLogqGBu3SR2hKnRep00mcoqLzanRT6eEN
                    1EXWPah4/0kb95SygjkYMkSNYmgPab2nnDOrKLYYMDBlnBEBB489PlNL+Iez6NcOhtQoA
                    t2rnZRdcoMCM53O+88xVNj2dtIweGZhsXaYI2NO8yWzAsONO0hTw7CvgruDu6KYKOTtmY
                    ZwD5yK1fHuPXLmFvoVtgNbcbHmh2lt6FxmCW4pS5LKe879R30qPszhxybwzfkJpY51W4Z
                    Y4N20ev2TZbD4xITKEDnlleCrEdzGD3Ma23Dvawq494LRQwCRoRqJbUnlOnhWZuopXIQC
                    sRlOojpFLW4VY/209KEc1KmCUIS5Rr7vtfdP8AsDwH45qwuIxJfE4q5IBd0MoBlnJ2o6G
                    dzr31N+G2P9tPSimwtu04t22QoxQkquUHYkGROm3lSZcilBobGoRknFbg9xVBINxlI1gm
                    e1swJ5UG5UkBdQoI15yZNTcZ8zrqSSSOcEnbrpQjNHhXPCHDZ0zyPgZ4A5cxAnTUTrOp/
                    A+vfRKYkTGnfGlKbF3VTDFs0QNiCInvO/yoxMM0QzBZYrIUtqDB1A69eh6UMkq2BBKXI0
                    tsGEjb9b0uv8PKtnDLuCAQTPLWDr1q7A3IOQRGuZuoHTxpoMpBGkHeioqS3Bq0vYRXXyX
                    LkkjWVIC9roZ6GAY21IqOJvZxLRlCldNACoMRzOp5zod6OxnC+yXQljMwSug3MGN6TY+A
                    6wI7IkAaye0RPPcanWSak4NOmU1poHY/r5Vz3g6j1FQRRpIGlNzXVGNnJKdGexXEXfQHK
                    Og39aZcEsQmY/aM+MaT9fWk9q2SRAJ1E6fWtUqhV7gPkK6JSPR6RXJy9FeIxAQSfIDc0A
                    /FW5IB4n+levAscx/6oZkqTmdc5svt4i5cIQak8pPqdNqL4bbIuLmXOB8aDRoHxZe+J76
                    nwWyI0MM06xrlUxA6doH0FEYrDlLg5QAVZdJUjSe8EEd8dIop7bnJkyy9mnxXBcLatm4j
                    G57xQqNcIZVVjOaSRnA07Mn4RI51ksfhEtjKsMQwyuVCsyRvl3AzA6nfNNcuIvbJftM0w
                    oy9qAc53hpGpGppvgcGtxe0WYsQczDmARy+fgNNKXyRlOVbciTB4LO0HbnTlMEVGhJAo1
                    cAqHTQ/IwY+v1opUplI5XaFaYWiUwnWj0tip51HfQcjJjXgptIM1u/ctHnbZlNsnqCwk+
                    TA0w/vJxo16xeRzGVhlHeC0tPgelUcExVxkjPaygQFd5cdxjZfGT5Vy85Zioe1mB1S2hu
                    ZtxluQF7GuoPdrXlTtSe52RqS3Rz+57bkkf5bk9kI2eyG5KZXMob0BOh5Vjva73iL7uHR
                    ySsKJcMVJUhV1ZNG1E8j1rcYDGB1Cg2xoCbaABVUmCXYfD2ddOYGpilfHsZdyFwLLpaGd
                    L7sRcVAQCQoHazrKyCA0nSujHmklvuK8OqWng+Z8Q/aC+W3eN1CD286nKjAK4ciAilliC
                    QARA11rQ8N4N7t7ZZlFslFuZmIALhfesCRqhGaD3zstbL9vB1B0PazCYOgMzG8aQfvDrW
                    e4ucy5STLNlA00UyrETv2VnpIIis+rlP7UqOrD0ChcpPhM1hxSlGukLlUswuC2LrKrHMp
                    GU9nsFT2hEa6ikmM4xaRAHvqrtPZtWv80iTGZ2LCTuZ0BJ151TjeLZni4EuqRlGVWtG2R
                    qHR9ZUxOViCp8YA17itwiGu3GnkSD+Ez51WKadnHKUWqIYQBBMsA2sM+cyTJLNsW8NPHe
                    rGvSCRqBueQnbXyPpSy9iOUx4V7DYm2RcFy4yk/6eUdmYnM3XWRHZ3GupKs/ZKrfIW+Ji
                    qWxQNLOIYq2jD3dwXFIn4XRlM6hgwjb7pO2sUN+1g86ZRJydDR79UPfpe1+q2u02kRyD7
                    2JLRoBAA0ETAiTG56nnQ1y8RrroGPoDHzioi5VGJbQn/iP5mk/JKSW6oeD+4oW6RBBgjT
                    x6UajLc3ADcwdAfyP605qXcAxO/wCZiiuHfGobkQTPTMBHnI9afgOoPtWEt3FJJBGpB+z
                    oSs9DMQPXvaYjHoLehU9kkDQkmQJImeZPXQ99JMQCxV2BJJYNI+0DIY+RAnuNQtTccWxo
                    ZAB9ZJ6DnXLkWp2y8JaUPeFYQe6W5vO556n8KN9x0PrTp7aWLRj4QvyUH1ms/hsWGA17X
                    MDXXu7qPTT1pkctJo9fQwQeenrp+NZrF30Nx80gZjEaiJgd+wFaTGXiADtuep7KlvAagd
                    d6xN1mzNpP2dRO0ajptv31evv/AAicp1EaWkt8iD/EfoTRBek1rRRXcvePSq6q8HPz5Hu
                    HVBahYGnr399Txi9lgO78K7a4blXLnJ8QI/P51aUJXvGhoZGex0c1TiJyKrZKMe3UClRc
                    jokE4FQAkDNoNAYOaATB8Z+dGXHYXCyo4+ED7WuRdJ1G4POl2HuhdOfdI89BziPKiFxzr
                    qCw0I2BieYgmm1nG+SeIutnl4kn4QIjZZI6keNTsOUPZPkJ075orB8Ot3sP7wXpvBjmVm
                    0HalQFOoBUDtRuDyEAG0STEdqdR0jSkbMhvg7snWASfDqdj+tqMuXgNAwnoQaDw1sJqdW
                    +lWXLq7kA+NUjF0c85pvZE0zPrOnft6VNLbRuB40F+2gaKNOVU3eIEbmO6jp9k7GaoAQz
                    olwD7DEgfzDXypxY4ozLDXcPhrS6ZVK54GkIk/Nh361iLnEidqGbFHrU54YyLQyuJrn4l
                    h7t4KwK4YTnnNnuBUbLm5kFo0ifAaUq4hiw6yC8NcYvbLkqUUQgJ3zaiNYBUxyNI2xNVt
                    iKC6eJX6yS4HNjEuvb1ZEgEgBTbzHs5SBH2YAO0aEaU0xWGuMh5Ot9LaomoJu2y4flrly
                    ACBAkkksYzfCsTf8AeZbEl2BGWAVZYkhlbslYHOvsq2raqDaRBmUQ4AGgQKhkamFgDuG+
                    1TyQjCSaRX6qeSGluz5ZxW4q4i5bt6KtxkWTOzZd+dUca4itt3tWtFQlSx+O4VMMWPJZH
                    wjTrJ1q+/wW2Ito9x2GabsqisQhZQqMCcp0IeTM6aEMG3DcGlsm4jhzdAYsR94ZiBqezJ
                    MjyO1aeWMfk0OlnJbOr/wYV77Hcmqmc1seMezdt1L2YtMNWTX3ZHNgAC1vTuKf8ax7Wu9
                    YG7Z1KnU6gjfymujHkhNWjiy4p43uv2VzUkavEoOZY93ZHqdT6VH355Qvhv6nWnOZzCoP
                    PTx0+W9czDx+QocPXc1ahdQWh/QqjEvEd7E/yqB//RqKNrE/P8eVU4658G+in+Zmn1iPS
                    kkqaQ8JbNmhwFhbiNZu+5V3TssgtypYDKHygBn57yOcGkuDtauJJynLpoQ2bv5ym3eelN
                    bF+25tshOVUSRlLqpABKhMsaNOsluc1TfsFHdxIV7jvqp0DE7+R2/eNTjJtuymWSik1yM
                    +FYq3cUoyyZjKQCJ8SNNDuYpxZS1aKH3SqVJMkqCNGO4JNY+0iswgtbJXMe1OjQASN5I1
                    8/E06sW8qhbmfIpmTH3RBnp2vkahPDb52N9Rtxud4xxF3zIIW3vGx01jXYajT8aXYa+Ub
                    xiDppGkabbfOnN3h6x2oz/6cjbObnuwQO8BvmaBv2gApOuYCe/KCuYHuyn1q3T6U6ic83
                    OM05eSPEcRmRjtCQf42H4IazPvB1HrTriRy2zru0eSrH1f5CkkirR3k2PN7JHlOgrtRWO
                    6uINKYSzZPfHLWqcO5znSQdT9JH65VA1a1krDAzTyVqmdUMjg9SO3sMG1WhjhXOgWO8kR
                    +dFgMdQI7/6c/OrCrfeHmPyIrneN+Dtj1cGvu2A34aI+M5vDT03+dLCzK0GI6jryp41sn
                    dj5afmaGxWDBQhdxqviPzrdtksnUwb+3/sVPiGt9tGIkgGPA/19aM4dekFjtoBPzoL3Zu
                    JC/ECDG2wafrR/CLRRCGUggmJ6HX60IR3sjmyUqCTiJ2PoaqL95NcxjAFeRM+kfnVasOV
                    UnNx2OR5KCbQZjA+WnzqzGW9ALiA9GTQjxMQfOgw5Go0q5cY4ETI79albEWUXXrDD4e0P
                    Q+lDMx5yKOuX+nprVD3lO6jz0/CnU35Csz8gxapBCVZ5EKVHeS2aI/lNWpYzMFRSSxgLJ
                    1JpzxLDfsmW2RlcqrNAHMaanUHuPfReRXSKRk3FyrZFHswLtvEWriqQJg5hAIYER1gmNR
                    tvyra/4ftFi2bEC2Z/8dbjBJO4DA6Iekgd8aDEYDFM160SxAzrLHUATrvpHLnvW4/a4tM
                    ozFzoqEkCSPEmO6T+IZb8mhldbOvAArreuM5to5JFu0+ZQqKFBDKGMuZcaxtm2mKp4qty
                    2Lb200ZAzqWURdXskBTrJghh4EazLLh3s5bAa4R7w2rhCqTBGS42ViSQAQpDd8Dzccf9n
                    7eKCuyqXUaBxKnnBIO07wRMDWuLJWrf9nt4syio1wZrC8RW4hUHK42kdq228Msgx4HvFZ
                    v2n94QC1q2VH/5UksPEwpHnI769j8J7q+qtbzD3SywaH0zjMGEbhYjwq84fOv+XduDuZn
                    jwIOsd/1pYpY5J+Dryw72KSXJkc1FYfA3LmywOrHKPnqfIU0eybbZWWCOhHPYgxqKiXUG
                    Y8j+ta7u5fB8hOcoycZKmim9wjJbze8lj8IA7J668/HSlltu0BrvqPOm13FZjJM/hS/Eo
                    GObY/XuoqfsVZLZZeVYiADB028p8aoKMFGYSnpEganqfrFca4FJgaGKIxGKzJrlJY690n
                    YeZmeUmpzuzvx1pAb8W2Btkww11I5xBjmCPkKsN5mtzAIzEEtG8Kfi6n8K6+Hzw3ayxEg
                    ACVgAx02nxoXDsNVJhTvzgjYgdRrpzkjnVIU18kZx3sf8KZshHY+HftRO6gknox5dOlaf
                    ColzKHy5gWlWOTTNsN9NIPgdNZGc4QCDESANNCwbYfOB4TyqfE7WuZVOYAeokHUyTBqc4
                    tkVNRlbVmvxtxSmcyrM6ZYnNqApKx8RCljprFZx0t22gtKAmJzT2d5A0B1AM7RrvS23xE
                    A5QEBC5iVUA7A5QSTGumkbVwrdYrcBWCJEkk6Tpttof1FThHQdDvLJSe3x/wClOPBYhV2
                    CZyByBJY+gA9BS/L3U09wxuIBGd3AIEgADvJ7QIB9IjUztxhLewtpHTKKvj4EyypnzTIe
                    h9DXYP3T6Gtfx7hyIFdFiTlIG2oJmOWxpJcGtdKgmiOsYNyqbeM1AQRM68hH41GaSi7mE
                    LiSNNKuS5ImgCa6l0jatQusPJqJNUftI6GrJo0K5mdfEG1dOYfakxzUtMjy/KtBmoLiOA
                    W5BJKsOY6dCKtsJkUICTAiTvSQg02NOepJhCQTqYE682A6gc5iPHeiylnWLMzzZ7mY95y
                    sB6ClasVbVQ8gxJgjXUcxGo6UwwtprkhRl1ygKczsSpbsyAo0B1PMbHSZZLbog2UYi3bY
                    qFHuxqpyyQWk82J7XZbnsKVXXKsV0MGJ61tcT7PqbFr3fZLF17YjLcItonZBAnNbmdfia
                    JmDheK4W5au3LdwKLimGiDMgMCD0III050lfIrIvdnX6fnVPvQTA1PQa/Pb61wKOZnx1q
                    dbYFpM0fBns4W2cRcKtfDKLdrRiAHViTBhZAImB9RSTiOPuX7huXO055mAAJJAAG25qhY
                    50TYsM4zKAqffbWf+I5+Og8aSlHdnbjWXqmsWJbL/AHcHt5iwUfaMbnzPkJPlWr4Sz2lD
                    KQqSQjESdNCDrqp1jwPdSW3bVfhBJOknVjPLoPAUww9q9pYNsMpM9l1IybE9qMsFhvpMV
                    o5GpWj11/xscWFxk1qe7fqvQww/EnsXbjDtKyq1xG+G4ASGYnkwEdroI1EVoMZxi+UAt4
                    f3VuIa4xD5V5xbQyek7CZrLcKQO7k6kIbbaqdVYggAbD6zzpvw2zirdlGWW7Cns5WzAgG
                    crEa9Yq0YRyTd+K/s4s2aWLHFqvKf6B8dgR7m5iblzSFa1GrQBEn7LFpbQDQEdNFzYBwM
                    yEOQYIGhBidp1BWCIPPaaPw2CfErca4pW2huQg3NwEsBHQMZ8gNppRh8UBattm3tgQZ1y
                    GAT03nWnyYYWk+CvSdVmcJSi7aadfD8A3FXV0RjyJGo11ExHcR8zSzLb6fKmF2/n+OZBY
                    TuF5SSORIn+I8zNWPgctu3cNxR7xcy76ggEDrMEaxGvrNYtCq7Rydap9RleSMa2V/lCzK
                    nT61XiEUKSBrpy76MiolAaZI8tOmKassW8xMnlRyYQGSo8z8I9dKZYDDhujAbnLA8BOvn
                    FUpNblnl9Cm1gXGgJCneYHfTDC4MPCq4ICnNKhlA3CgNIzHXWm5wds72x85+tTwWHW2Ss
                    DUyPDaPEfjQUIg7kvYvbhYHwSu3wkjbnAIWfKhb9i5bOY3Gy6k9kGDyJhQY8+XfWit2mY
                    5bYLkDaI321OgnkTAMGmFrgWIJ0thtOTjTu7Ua+E0rjFeToTly0fPrt8HMIJGpDEyRpG4
                    6wNNKPw2JW2lvMiuyxEGFIKiCYEZlAgneSaeYnh9tsyNbymYaFUMCOum476hhODWgMoRT
                    3tqf14Vu3Y/fSE2Af/ybWY5iSeeiypII69POtqg0oDB8Fs22zqpnlLMYneAT301tpPhVY
                    QcTnyTU5WhVx+0xtggEhWkxyEET4a/OsrcdZ3HrX0ZLdU3MLaJk20J65RV4ukTowtdmuV
                    ykoZyOzXDXqqu4hF3YeG59BQNZYa6MUF0J8hvSxMVnYqTA1y6wO6f61Y6ZTGnkQfpSavQ
                    thTcQUGSDHhUH4nOltCT+uQ/OoYfDm5ChCxbTupvd4U9tZIBUb5eXiIFDV7ZrEoFxyC5g
                    Ag5Z1PUaaDTSa23A8TaXtPbAtlokAKNPhzBdJB0zc411rN5ad8Jcrba26mGnLpB1I116M
                    ZnpSzVKxZM0LYzK+dbiXbazqqjMmkkC5myiJJ+GeXjjOPYg3L73HQAuQREEZcoC9rrlAp
                    xfuFLZtgr2iDIBnNoNN9IHPprSfE8VXJctsrMxGWSREroDpG3hOlJF1uKpehY1xeaj5UP
                    cuIdkHpFVEV1VJoubfAbLMJbDElvhXcdSdh4UZdvEnX06UHhW7HmfrH4VOanDFrk5M+06
                    PHHp8EYxW73fywi27SMvxahdJMkFRA8TTGyDaUMQkxDtcJMkkGTcB7J0iNRrHOlaPkZWI
                    2IMbE9flRBxI1KsugnVgC0agRAMkjmdJNB45KWyNn0y53C+GYhrmZ0RELsQWEAHKd4GrN
                    rOvrWhwl5raKqYhYgDLcBkadYP5VjsJxE25KRcttqV5EnUkH7LfkKcJfW4k24BjQMw0PQ
                    g6gd+vnXdjhGG/l8nzPVPJNr+K4D73EfdW7oFxczPplBlnKKNzoATue41ly7ALnGo7IAE
                    Lppp3ab/APVc4o5S2A1wMc2dso0UalVXnJkDU7EiOo2HuXFXUnXVuhJ122NbLBTVM6ugl
                    PApNcv2X22g5tGMyZAIbWYI5juoq5j7hLHO4BJ7JaQAfsxtA22rtnH+8RrdwSwBNtuZI+
                    z4/X6zThV0ickeJH51HRWx52XJli2m3bdgJMCicBYW4CxM6xl5eJ61DE4V0MOsehHqKqt
                    2yGGQkNsI7/wopUzmT33CuI2GIUoJUbgbz4dKK4I2ZDtoxn0FGYW0AQWPa6/Zn/jsKZva
                    mCYnrFO46tx6sDCVAmSQD8O56aEfrwo73QJgb9D+Bqt07JnTQ+VLpoFDTgOGtuIcHOBmz
                    LmRABCiCDBJBBO+8cqJwfEUtz7u4cp+Ev2spiI+IQDoQJ1hooThftBYuAGVDjMCmdEOUj
                    VSrsMwkAAjlGu4qriXFrMN7pu0m5ALgAAiDdWQIDGNTHdqRzKLcndnoalVt7FmOxtu4G7
                    Oa6xYBj8USgUtA0gW4k6nXrQdtFnUx3SdPE8z8vrVOFxfvMzkEZmMSZIWBCzzjb86tNrp
                    rXVjjpRyzmpP4CEEGNSDEbnXmJ6fnRCP3ULh52Ek/dAk+g1oxQE1uCOiT2j3n7o7t/CqW
                    hDpc1yaj+1rytJ5lj+Ne/bf/Tt+h/OtqQTAPdVdz5bn0qh8V0Hr+Q3oTKevppUhUHlF1I
                    vKO2+g79PkNfWurhF56/Ifrzoc0SmCuEZvdPHXI35UO4vQNR1sNaJGigjoY+lWoiyAqyZ
                    003PTvr2HwVx/htsR1iB/M0D5064Xw5rbZ2KSB2d2gnmRoJ8Dzo3KXCNZdwG2qF0Ii4Ou
                    +Xp5H6rTW9cCjcDUb+OunOkeKuf565TqSoY7dBpEEdkxudqajTYAeAgnxO5oLE27Y2pIh
                    hsKmY3Fy5idNJA8BJid6k+FZviYEySDMHcnp31JG66jlXCSZ5etHs2yDtsEvWGWSFJPdB
                    JPTSs5ewzr8SsP+SkfWtWbZ3zT4gH6RXgzj+hI+X9afs/IyVGKZarIp3xcS5LDlpsSBHd
                    JGvWk7rSSx6TFeHMAjox+ev40wNllyogm6+sb5V69B/2ekgpowaNNJ8Ad/wBda1PCLYN2
                    ++5LkKf/AE5lY7oK+gqkXpjsexn66UsEdL34f5Qhu4K4txbfxXGPUxtO/QDWnd3hy2cLd
                    u3GUsBlTKgEuwjXNmLAb7jQGmV7C9tbkgFQ0zsQQJM8joPSO8ZHiXGGxLZV0tI0oObMRG
                    c+Ww5AnrRVyoXH1OTJUU9ktwHDo9uHt5T9622qsAJMjlA51sF9m7lzDe+Fr3bMgf3QZjc
                    I3yCV0JHieUTsR7J+z4ZVu3B2TBAP2+Y/g/8AdH3fi3GahKe+wMk0nSPhGPxLOwT3ZQqw
                    GQEg5iYlywmZPMDwFPH9ksSBD3lVua5nYDuLbVqvar2St3rjXkYK7D/MDTD6QDI1BgAfl
                    rPMHbuBQLjB35sJ8t99NJ50zltsTy53GK0vczfCuB3Ld4G46sFB0Wd9tZG0H51qhUsoBm
                    Na5PX+lK7fJxznKbuQs4smZSAJOgHjM0tTh1xGVyoKg6wZgERJG/OnSWSW15GjCPCtROh
                    Yq99MMG2kUHh8OzSVACyYLGARJiAAZoxbZTcadQZ1PUQI6U0YjRRMDt91L+LI72i1tgBP
                    aGoJXWQrc2PQDXUcqPd9IpbjbfbttyDA76A5l1jwn0oT+B4pSdMSJbtJ9l2YnZwVAI/c5
                    nTmeW1MMHmLSxgRoB+PQd1K7bO+Ia1kQEXHIznLA7TARBmVMggcxy1qeJxdxLnucoViyg
                    tM6NHwiNTrudqm4yskoOzV4LCqLVss0SARlIYkEAyRsJ33nXajEdNkt5j++S0/wiF+VCq
                    mWFAgDbwqYXrVCtEzjmPZDAfurCj0WKrNTBrhNYOkgCOddz91dmu5q1B0mJ4faifeYe4w
                    J0b3bNAgco8dRRVzhVt5Npsp6HUA9CD2lP6itpjsKEAYSeR/ClWIwqXNZIYbMujjz5juO
                    lLCqpoi4gHAeEW1fNcliIjYKDEyI17pJ5GtaltRsAO/n671m8AbltiLpU9GUQSORI5HfQ
                    d9aW2ysJU+n4im0RvYZC7FYQvcOSNR2pMajnsdfypRxK1ctHVZ5ggyo6nr9O+a07HINBM
                    9NzS/G3ixXMpXfQ/rvpkvAGvJkEUuSYzE900zweEcaliq9ATr3RtTRY7q47hRJIA7zFOo
                    ULZ4DSux+u6hLmN+6PM6D03+lC4d/fPkDZoEn7oHgNCazpAqw25i1G3aPdt6/lNLcZxHk
                    Wifsp+Lf9eFaC3wm2NTLeJ09AIPnNZz2hwipdthdFIYx0I5dw2/pSqVuh9NAVx5Q6AaxA
                    8RP40EwI5fKr3uZUX/AJH8f6VS+J7qE1uIzlpbjtlUEseQ/Wg76d8LwN+0ScoKmJAYSCP
                    ltpE0R7M2/wDLZzuzR/CoGnrNOJqYVdCD2h4rksukHPcBQDoCO0xnaFPzFLPYThP7TeYu
                    JtWoLLsGZpyqT93QkjwGxqv2vD3MRbtoNQoA72czB7oA36Gt57HYVLFkIoGcE52+83I+E
                    QI5RVOIndjeiCXlmiKHuHh+E/rurpWKra6TVV+5lUk8qnQoDxS99keJ/AUtB76k7FjJqH
                    zpqOeTt2Sr0VwtFXWkjff6UyjZlGyCWye7zrz4QkamR01E+c0SjVy7f0/XrTaUgqKKVRY
                    BUmOWsAd0/hQuOvZRGaZ015SQNKrw+JVwQWBlmIHcWJFdFqD/ANUDfg9bQu2maYkyCqwO
                    ZJGg1+ex0rmPRRbJBLMvazagCN8o8J1PoKZWnAtM3M/gxRR5EM3mvSgbzFlABAgQRlBkS
                    Tr13oNDRVOxTf4bcfFftHvFgRl3kmCvaOs6E6+G1LPaBn9/aIWXgSROUgN2TPUdr5d1aA
                    Yccuyf3dB6VMo4+647xB/KtQVE6vEkO4I+dWpikOzDz0+tUPfXa4hXxEjyIoTF2EC50M6
                    iYMjWtpGob5q9mrNpdYbEjwNXpj7g+1PiBTaA0PM1R8zSpOKHmoPgY/Orf7zT7rfL862k
                    NDZrjHQsTy/KhSINer1RRzstVuomrbWmx/CvV6nQAtMSTofWvBFJXMAcpmCAdYK7fxV6v
                    UxkW3QrCCqgeAkeB5Gk1vhUkl3J1MdYnmT16ACvV6hqZmW3eG2ogpI7yx/Gh8NgBZYtaG
                    h3UmYididY1rleoBGiXtNRHzrPcVwvvb2jQQNOkcxGh8+/ny9XqK5MyWF9mfeFRcubLsv
                    XTc9NP60xXhiWtBbUd+UGf4jqa9XqEuTaVRF7UfBCnw0PiPxq1FPP5GvV6gAoxVpSwOUZ
                    hAzRqATqoO4B/Gi8PeyEQIHQdK9XqIyHSXARNRuagg7V2vVjoQiuGCQdYriv3V6vUxB8n
                    A2o8RRimvV6njwNE6hqi9bkdY0Ir1erMekB4lCwERIM/KNPWpI52I1+Ver1AQuw98Bjbb
                    ZpI79BIHeIzd8nprFkykg69D1HI16vVmUXBXcBLZpHhAjyipTXq9QCemqLmFRt18xp9K9
                    XqISj+7U6t6j8qpfhp+y3qPxr1epjALoVMEEVCa9XqZBP/9k=" alt= "Celeste">
                    </img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> Celeste: </p>
                            <p className="jogoDescrição"> Ajude Madeline a enfrentar seus
                             demônios internos em sua jornada até o topo da Montanha Cele
                             ste, Desbrave centenas de desafios meticulosos, descubra seg
                             redos complicados e o mistério da montanha. </p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            {/* <p className="textoPreço"> </p> */}
                            <p className="descontoPorcent">-49%</p>
                            <p className="valorAntigo"> R$ 36,99 </p>
                            <p className="valorAtual"> R$ 18.99 </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABA
                    QAAAQABAAD/2wCEAAkGBxISEhUSExIWFRUXFx0XFxYYFxgXGBoYFRgaFhcXFxcYHSggGB0l
                    GxcXIjEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0lICYvLS0tLS0tLS0tLS0tLS0
                    tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQ
                    H/xAAcAAABBQEBAQAAAAAAAAAAAAAGAQIDBAUABwj/xABFEAABAwIDBQYDBAgGAQMFAAABA
                    AIRAyEEEjEFQVFhcQYTIoGRobHB8DJC0eEHFCNSYnKCkhYzU6KywvEVJHM0Q2OT0v/EABoB
                    AAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAA2EQABBAEDAQcDAgQGAwAAAAABAAIDESEEEjF
                    BBRMiUWFxgZGx8KHBMkKC4RQjM1LR8QZisv/aAAwDAQACEQMRAD8AFy1NIU5amlq0LyFqCF
                    xClITCFaK1HC4pxCaQqRJqVIuVK0i5KkUVpEq5coouXJVyiiauSrlFEi5KuUUSJYSrlFFyR
                    LCWFFLTYXQnwnQqQ2o4XQpIU+DHiBizbnfYXuqJoWjjYZHhg5JA+qiL3CaTTlc6Q5wPiAmP
                    K4PvyW3sjs8yxySeJuVm7H2cW1XZhcum4R/s3wtjeuPPK4uq17/R6aOOMADA/P8AtZVbYTI
                    /yx6IU21sAN8VMGmQd2i9FrkATZZG1IcJgfXJJD3MPK1GNrxkIBwmKzyCAHt+0OPMDj+KsQ
                    s+szJip3Ex5G310WnlXbiduavCdq6dsE3hGD+3P7JoCUNTgEoamLmWmgJwanBqcAoqtIAlh
                    OASwopSUtTHNVxzVE5qEFEQqzmrT7P7JbiHPDnZcsHSdTzVBzURdih4qnQLNr5XR6Z72GiK
                    +4W7sqFkusjjeLBux/SVKex1P/Vd6fmm/wCDaf8Aqu9PzWh2hx9Si1hpgEkkGQeHJYD+1GI
                    GrGjyIXFgPac8YkZJg35dP6V6PUDsjTSGKSLIrgOIz67lm19kn9b/AFZhJuLnhAJJ6CfREX
                    +CWf6zvT80vZmi+o6pingZneFvCwDSR6AeRRE2oJyzcAE9DIn/AGn0Va7tGdkgjY6i0AOqs
                    u68joaGPXCPs7svTPjMsjLD3EtBsU3O0c9Rn2pCVXsk1tSmzvHeNrrxpkyx/wAla/wSz/Wd
                    6fmtnE//AFFD+Wr/ANEztBjn0aJfTALswFxNjyCS3Xax5ja2Q24f+vO5w8vRPd2foY2yPfG
                    KafXja0+fqsSt2JEeCsZ/ibb1BshXHYJ9F5p1BDh6Ebr7wj7s1tOrXa81WAZSIIBgzMiDws
                    mdpdmCu+g3QlxvvyxmK2abXzw6gw6k2M2cYobuRV+3T0IIWDVdmaefTCfSNIJqhkXZrg3R6
                    iufWwUIbI2HWxF2iG/vusLcOaIKfYhseKtJ5NA+LiiLEV6dCkTGVjBYD0EdTZZvZ3brsS6p
                    ma1jW5coBveZuddOASZO0NZKx0sXhY326kAc3ZyDjhPi7M0MD2QS+KR1+fQZwKAGDV5KyGd
                    kWGs+l3hhrGunKPvFwj/b7q1/gml/qu/tW1QP/uan/wAVP/k9Uu0+1auHFM0gDmJmQd0Roe
                    aWzWayWVsbH5IH+3/bZ/lT5NBoIYnSSR4BPnf8VDFrJxnYkhs06t+BET5jT0UeA7MMqMk1H
                    tcDle2LtcNRr0I5EIk2DjalaiH1G5XSRoQCBvAP1ZU8bjhRxbAfs1mDNycCQ13y6dEQ1msJ
                    dDu8TbOA3+XJHFHGR1sVeUB0Oga1s+zwuoUd383Bq7BvnpWcUg7b2yzh6mWSWkeEnfx9/kt
                    PYnZkVqYqPdlk2AANuJnzRNt3ZIxDA2YLXAg8iYcPS/UJ+MrsoUzUiAxsNaNCdGj4Indqyv
                    hjZGf8wmjx8V08V+2Cls7Fhj1EkkoHdAWAennfXw1+o8kKYrs3+27mi4vIH7RxgNZ+6CR8F
                    bqdkg0CakkmPsgC/wDUiLY9KKTXH7T/ANo88XPv7WHQLJ2zt+oyqabaJcGQc17mJ3dVbdXr
                    JpO6hd/DycZrFkn14A6V7qn6HQQR99M3+LgeIgYuqafIZJ62eMLMr9l3ASx8ngRHuUP1KZa
                    S0iCLEFGVLb1LIHVMzHfeblceQvEId2/iqdWoH0wRIAMgCSJvrwW3s6bWl5ZqGmv91AZHTF
                    Ag9MfJvHO7W03Z7YxJpXAHFtsnB60bII6jGLwFmrW7OOaKhLhIDJjmBI06LKClw73B7SNA6
                    HaSc5ayDO6CbdV05/8ATK53ZbN2rYPn6Amvla3aKnVFdlNjiwFneOeIJlziAL2AkRx0UR2z
                    Xw74NQVWWkEQ8b7EAfMLV25sx1as4OmQxgb/ACwSfDvu4qjT2KymD4GiZvkDQC77UcdOgXM
                    LmcFe3Y2QgEff9uFY2vtN4pNcJbnFjpvPHlCwq2Fc6nnNYvedDnJg/Aon2rsuaFIFtm29oh
                    Dr9iML7NjTRpBhosMwtEb7c5QRObXKZM1xOB+qxKhcXsnWw6wdVqhqzNsNLHS20WF+dvir2
                    zc3dtza3+Jj2hdTTkVS8l27EabJfBI+uf2U8JYT4XQtC89aaAlASgJwCpQC0gCWE4BOhS0S
                    supqJzFoNAcA4aFZmOqwco08/wC7mk7qC1xwGR+1c5tvrS1/VbXY8w6p0CwMOT+S3eztn1O
                    g+JWDtFxOjk+PuF1tFAIu0YQPX/5Px9Otomq4lrQC57WzpJA+KyNvVBVpd0x4c5zmgAO562
                    3BVO016dMcHH5KPsrgxJqn+VvWPFHlbzXF02ljj07daT4gbAoUSDQHtfP9l29VrJZdU7s8N
                    8LhRNmwC2yffoPM0iLD020mhg0aIHlv6rN2C+o6rXqVGObmLcsiLNzAAeUeqk2vtJlEgEGT
                    uEeqZsragqlwANo15zw6LIxk7YHyFltdXi/qB/V1XhbXyaZ+pjiElOZdMHXwEZx0aSRn3Vy
                    u7/3FHpV+DFcdUAiXRJgaandos+s/9tR6VPg1Ve09Q/q5g3DmkHoVIo+9fDGcbhX1e9XLKY
                    I55edpv6MYVs16jWNLnEw0X1NhyQ9s7bAr4oWhga4MG+Tck8yB7LQ2TtTvqUn7Qs4c+Pn+K
                    HtsYQ4asKzB4SZA3D94dPl0WvRadhfJp3ipKIb5XWfqM35XhYu0NW8RxaqM3FYLsZq+fYdR
                    yHV0Bra7X0y7DkibOBP5+cICyr0TCYtlVmZpkEaddzgsyt2ZpEy17mjhY+hK09mdpR6Vhhm
                    BaQfL6ggZ546UsXbHZMuse2fTkOBAHNexBODg+f1vEXYER3/Rv/ZFTq4Dg2bkEgdIn4hYWx
                    MEMPUqMDpkNMm3FQdp8S5hovbYtcSPRuqz6kDWa7aw4eBR/osX6WFs0jndn9mh0jcsJsD1k
                    INfBRBjcY2kw1HzA5Sb2C852vjnYioajrbgOAGg+uKO8LjGVmZolrtQfdpQVtbZ/c1C3Vv3
                    TxH4hauw+7bI9jhUg+3UAed8+Y+Vi/8AIu9fEx7DcR8vM8E+hHHkfUhF+xMa6rh2l2olpPH
                    Lb8EP9sMaXuZT0a3xdSYM+Q+JWn2bfGGj+I/FYnaW9X+kfBDoY2jtN4AwN1emQPsUfaUr3d
                    jscTlwZfrYv7j8zZvs8/saX8rf+IUFfbtCm4sfVAcNRDuvBU+zePD6TWkjMwZSN5AFj6fBQ
                    bU2JSq1O8zuaXEToRwkeiwNghGpfHqSRV8ed46HBHC6b9TO7Ssl0gBuub4r3GQcHPn5Labl
                    qtD2kOaRbgdyCO02zm0a0NENc0OA4SYIHn8UbbNwraNMU2kkCbnWSZKEe1WJFSsQLhoyTzn
                    8/Za+xgG6tzYr20fp0JWDt47tE101b7Fdc8uAPlV/lLBAUgYSMoBNwYG/KbfJLkTmiLr1L2
                    7mkLx+mnMErZALo8efn+iMdqudUqUKrZaXU5joJI9Fl7ex9Qta6iA8sv4rgk2FpvGsKzRxr
                    TRw7c+U3pu0kNcbRw0Qg/Evc8saBlDjHigWuJ36LkGLx56L38GoDoQWj+IAj5z9laxG38dV
                    AY4NgWIywDmGl9PJbgxJ7gjND2jK7nGh8wsXFU6pZrQ3TFSSYEAEKrgsW+XB0gtbcn2B42l
                    W+MOramMlc3D+qqYx+ciQddN9joOZWrTbAA4NAUWByvGfUzHzKtEefuuhAyhuK8f21qe8lE
                    Df5TZ9SQPsPumgJQEo4i4/huVwMiRdO3BcgwvHT0+fI3wfelwCbVdATqtSLiI38eird+HOi
                    It6jd5pTpLC6EOifHJufRDfI3nyVwEWHH4J2YcVQbifGQLjLl6QnvYZVd4q/wACAQHGsX+e
                    3Hwnjab2itSZ9thlm/wnfBtwPmq+z8b3k5ozXJ58SqD8UypUaW/ep5SHAG4Mg8zYBUGnIRB
                    9PT66pVrvDStyKomj6+R/UIkwTs1W2gt9cFu0HuYZbHmsjs/Q8QcbeHeRc/M2K3X01Tmtc3
                    a4WCubqXuZM0xmi0c9VUxtd1SM0W4D8lLQ2rUptDWtEDl6qHGV2U4B1OjRclVO+e42ZlHF2
                    vWLIDBCWCMsG0dOiFj9XvMzXkE8uJyR88/CXG1XVHZna/gnYHFupEkReJm2kxx4p/d2uLpp
                    pJxijdH3ZaNvl0xlY++lZL3wcd+c9c2D9RYU79sVC4OgSJiwjxRPwCixm0X1G5HAQTuCZ3a
                    aaaFuj07SCGCxxjjJOPr9bVya/Vua5rpHEO5F84Az8AD2TMDiX0nZmHqNx6qzi9svqtLHtE
                    FVjTTTTTH6aJ7xI5oLhWeuOEmPWaiOMxMeQ03Y6Z5/PlR0armGWuIP19WWlT27VGoB6gD4K
                    h3aQsUl00MxuRgPuP35VQa3UQCopCB5A4+nCvDbdTMXwJIA0OjZj4lV8fjnVYmLaRzUORNy
                    qmaSBjg9rACODXGK+2Ecmv1UjDG+Qlp5F85v75U2Ax76U5RruNx1TsbjnVQA4RG+Cq+VODF
                    f+HiMnebRu8+vl9lQ1c4i7nednl08/ureC2m+kzI0NIB3iSoMTjH1JzReN3DRIGJe7VDTQh
                    5kDBuPWs+f3ARO1k7oxEXnaOl48vthQUS5pBaYI3hXae0qgMl0ny+Sh7tLkRSQxyG3tB9wP
                    vyhh1M0P+m8j2OD8cK3iNt1njLmLRvygfkVl92rORdkRRRRxDbG0AeiXPPLM7dI4uPqb+nk
                    q+RLkU5aiLZHY+tVHeVQaVPXxDxOH8LdfM+6ZuAFlKZE+R21gsoafs/vKT3NdlqMLSzpc67
                    rtPqsarh4MBxDHCc0b9DKsdoMQ9xYcM4ss5oaDqMx8LgdT13yh3DY6qwZS0uG4GZaSIkHd0
                    NliJEhJC9vFppNFBGx/NXfTOaHsTXsB5ohfgqEDK9wfzIgnhEfNZWPeQ4gOiYGtjyIVLvKj
                    QCGEToZnThChdUdUeDw9Ar2VklF3jn+Fo+iNdn0A2m1o0In+4j5AKxlS9mGfrJFFpaKmSWg
                    2DspDSJ3fd9VcxuBqUXZKrHMdwcInmDoRzC0RuBaKXlO1NLJDqpN45ca8qvH6Us04e8gwfi
                    lJi5tJv8AzEwHK1lUVVgvv3EfJURWQgjmMngfn71/Y5F/Ym6dV2V3J3oD/wCJ9As+vVbmJn
                    TyUG0Q4OMk6a6fHXqqmb66pJK9Fp9KAAS68LTwdWXaRabR9BW6tUTp7fksnD1ACPffpcQpj
                    XcbjLHPXzVWrdprfdLFoCXAcfmE+sYI+tLfJRNcbEcSNOEkecEJtRxcWzaBAVLolpJC1MIH
                    OJcZIGhk2323LSwu2MROVjpnQETu4lYtGzQBqTu/FaOysU9odEA7qhExPUiT6qJEsYrxAH0
                    KKdmYVoYHu+04eIuN50N1YdiKUxnpzwzBBOLx8ugS9+ku8V+Qv6JcPs6tW8UHWL9CRrutCi
                    wSaMOO57vz89kbiDoQehlNNND+ztk16ZzNdlm1r2Mzrbd7oho0nN1cXAjeBIPkBZEHLmz6Z
                    rD4XA/n0/VRliYWK2WJpYjDljdGqhYkLFZLE0sRhyUY1VyJDTVvIu7tXuQ92qndpO7V3Ik7
                    tTcpsVPu12RXe6SGkpavYqgYnhin7pLkUtXtUPdrsimyKSjhy5waNTx06nkqLgOUQYSaHKq
                    ZVf2VsWtiHRSYSN7jZo6u+QuifAbHwrA1zmuqmJOZ0M/tG7kSUWsqnI0Na1oizR4QBwsLJf
                    fjoulH2S/mXA8h+fZZGwOzFHCnOT3tXiR4W/yjjzPstPGVrEuNgCT0FynVA7LJOXkLn1P4I
                    N/SBj+4wdWo0EOeW0muuTLjNydGgZj7IC4k2V1IoWRN2sFBeUbeqU2V6xaSGGq9zYiYc4mO
                    AiYkSq2y307+Agn7xIsOpCw6jnPcAJc5xgD2CO+zvYTvGh1V1+G5Rz2xjKe1r5nWTx1PRC+
                    MeM5AfnGvK1xz3aK3jMQ2A4RLheIjWwIFwYXoJ7A0mgkEyRErzrtVsGphnZpzMmJ0goGTMe
                    dqN8LmDc39OiKP0aMzYp7xfLTjmMzhp/ava6TWVqeWo1tRvBwnz5FfOf6O9pGjjKZnwus7p
                    qfYHzhfRTaD2OEOhu8RInidCPVHW3hLlcZTb82hfb3YQP8AFhamQ76bycp/leLjznqEG7U2
                    FiMPerTe0fvi7T1c2R7+i9ieXtElucfwkB39riB/unkm4WsHtNnNm0PbB82ncrLvNZTpWVT
                    cL57xj2VPvNJHPWOHn8isiIXtW3+xGCxDi7KaDhJJpZWhxiZLSI52heSbb2c7C1zRcc2jmv
                    FszTo6NxsQRxB6pe4LoaeOhQtZ7na8E3KX3nl6KOoDIHH5ol2fgctNvhFxNxe+ntCiOaZkD
                    QXIUFM8CLA/3WHslDwSwF0WuTMb7W6BaG0cWBlyNywwNNgGuiSC2OTuXQLLZSzEAeW8qA2E
                    +iimlshtKi2pUe2XgHKHSYiYsIjSTygAkqJ2zH1YLy2hRBu5xDDBBIOU6AkAX49ViYKs6i8
                    OaJIvBEzbh5lTYzHGqSTJI4wSL8gRrwA13qUVndG8Hn58vhE2zcPgKbmv/WGEtmSTAJLQNT
                    roT1JRPhTTe3NTLXNO9pBHsvJn1OJJ6z03jjCm2djiw+FxZceIEg+ZB08lC1Z5NJv/AJj8/
                    wBl6sWJpYhvYvaZzT3eKtubVixNrPi2+c2nxRVCAkhc2XTuYaKgLU0tU5amlqIOSO6UBakL
                    VOWpuRFvQmFQ5F2VS5V2VTegMKiypcqmDV0Kw9CYVEGJ2RPATgEW5D3Si7tMNNWsq7KpvU7
                    pVciuYOllBO8iByB/FLRoy7lqfK5WlhmamN0rPO+/AOq7HZOkAcdQ7+U49/P4B+p9Fo02+G
                    k0n7oJPHMZj2W7RuRuAE+X4lDNR+Wq2TZrGNHV0knrZbuGq+EPOjnR/wDxPW/m4Iw0BbXuJ
                    Vx8vMbl57+meqRRoUQ6GuqGY/hYY8l6HRXn/wClvC95SpPBuyobcWlhmOBsIKO6ygDdxpeY
                    bKo0qLhXq2E5WCJNgCTHQj1R/svtbghDe9yutAc1w94hY1XZrq2EwjqcZ+6kE8XOLnecqlT
                    7NPcZrAm+hfMToJjQLNJscTuK3Qh4aNv5+qPMd2noU6eZ1QAcdd8DqgztH2lwlamWSTMicp
                    iTzWztvYlGo2kzIBDLRYzxQ7X7LVQftDu5+yTMDgLSEmMR8k5/PRPeH8NGPz2wgzZZy1Wcn
                    fAr6zwjs9NjtZaD1kL5OdRyVXtH3SfRfT3ZaoTg6BOvdM/4hdE5yuTVYWoPDbd8Pr65QVmx
                    dVBhqwrZ+9BYT9i9m7gP4p38NyndVkE7pt0Fp9ZQqKv3Bc8ev+0j5rzXt5sgPw1Oq0ftKdM
                    PHNhkPb7Zh0PFHdXaJDzH2e6e/dPgAMe6x9oUi3u2zMBtO+/Kw5onVZ5cUR0W3S/xUeq8Po
                    vJ8WkRfnM2lWA6d5tbxOM2VrtFhO4rOpCzR4m9HTHpp5LGEo7tbarhRxqN0qSk0zI3b9Ijg
                    kjU8TolzIylADqrtKpkcHR3jbZ2QcpA3E8ddVYrbcaHF1Og1tiLjob7jBCp4XFGm8xFwRcT
                    HMcCrexzSNR7askOAh28Gbmekg8pQHGSEL2Ap2H2+IHeUWPMZTbLYOa8HqSwA9BzW7g9jYb
                    GUqZZ4cjS0gEZgSWls8bB3qVgbW2AWA1abu8pk6jcLa+ZOnBVtibTfh6gqNvxHEHUKWCLak
                    OgseDBW/T2Wabhha8FjnTSfwd+4eoHr1W7sHCVqADHOLqeZzADq0AZmlp4WLSDviIV5zKde
                    kHQHNeJHp7G6uMbYTc/PilGVZ5AXNz+HzCUhJCeulDuWbulV2g/LTceXxskwTs1Nh/hH4FR
                    bXqDKG8T8LqPYdWacfumPW/zKHflNOm/yg71P/Cv5VxanLle9J7lNDUuVOCVFvQGFMyroUi
                    RF3iUYUiROhdlkwr3q+5VrDCGk/veEdBr7keid+tRTqOmDTDT/SbGfT3UddxMNbuBj8U3FP
                    DGUa9slRhpVZ0yvOSSOTizyJSYvG/eu+Y+4gEXXr7nJ/4VraDc1cC2UOYRrp3UDy1RLh2yy
                    HRz139CvO8Vtrumd86/dMp03ga52PfTI9xfgQjTZu0m1qLKjRAe0GDz+K2DKwuFLUo1j9l1
                    yBrxG535bj5IA/S1i+7pUT/+W/8AKGnN8UbVmlzRBhwu0/EHkd/rqAhjtfsc7QoNYDlc2oC
                    Z1EWePQ+dkfuhs3YQf2d2gO5Aa6W06r2iP3HnO30zR5Ld2hiC6kTTaC4XyzE+a86wxqYGu+
                    hWaWhxjlLbZhxH5LbZj6kQ1xB5AGfVZZovFa6OmlBbt6oh/wDUa9d9IHDGiAAHPLxqNYG8Q
                    rXaHabadI3Ewhp+MxMXc8dQy/OwBPqh7b+0y4QTPzSxFucE10mwElZVB2eo53Ek/Xuvpjsp
                    VP6lh5/0m/C3svmHA668+u75r6R2TVLcPQpNIkU23OgtqR1mAug7C47bOVrYivmd3bSeL3D
                    7rT/2doOFzugx7RqQxwA0bDQOkADguwg7sQLzd03LidXE7ysTaPaOgTUax+Y0pziCMpgmb6
                    izri1kCIDKzHVzUe9g1y0qXC9Z+Zw8qbCei3dqUpxFOmNGMLz1dpKGeydU1a7Mwg5nV3jg5
                    w7qiz+mm1/siBmNa52LxO7/AC2/02+ISnLS0G6H5eF5f29web9o0fYcWugfdOhPR1v6kFAn
                    6K9qwmB/ZVa7oyim6SdDOoIO6LLxmpTgkaQYhLjJqiulh117foupsmL/AEU6qyD7JaLbg8x
                    +CsVADIKMlW1gLfVMo4M1SA0cZ6AW9VsP2XSyQW+L9689Tu8uiq7EaQ0uiSfYfQHoosa8td
                    IGvA+qU9xc6geFbYqbuPX0UuBxb8NUyklzDYtNxEiYnlwUmK2QM2Zn+W4Zm23lrjlnq33Cz
                    HVC6x14/X1ZaOz8WcoEEwePBW6xkKmRtJ5RJ2KLhTfTd9x1gdW5hPuZREXoGp40sqGq0FpM
                    dIHFb+yNstqnK7wv3Dj058kl18rLPpju3BbRKSUwuTJSi5JESxttPJebm0R6CVW2DWIqgTY
                    gz5CQo8S/9q65+181WwDoqsj94e5VAroPhG0D0pGkrpUQcnAoN6xmBSBLKYHJ0qw9KMKWUo
                    KauTt6SY7T5U2DY1xcCdGz7wqwWjgqA8btx8E9LE+pKl7jSdp4g0l56ffp+5UmyKWZ4n6ss
                    vFNINbCuEskvYOLXj9oweYJA/hRDs6nkqclgdusM8ftKdyYDS3UOm3W/wAStjG0FUkm5yD9
                    k0gK1WgXyx8EFzQ7MBLCCHAgwSPRHeyqrnASYyiDAAiPbcvNqwdTe19dx78ABrGx4WxMvOg
                    JMGL+6kxu06lQlrpax0Esadf5jq7poiLgEGwvXpo7RYQnL+tsBG+QG/3luU+qs4TE03PPc1
                    WVHAAva1zXS06Hw2BjQmxHkR46xpMhriI4j8V6R2JeMNgHVq+Wl3jnEucQBkb4AZ4EhxH8y
                    try40qkhDBdrL/S7sg1Th3tbDhmG77JjXiZA9SvOsPiK2GdBGm4/Ir2bEv/AF6gHxAJzUpF
                    8hAyudwzQTGoBEgGQgzauyBUBa4Q5pIneCLQqlftNEYR6ZrXDByhjGdpHvblDY5lVdlbDqY
                    qoxpJAe9rc2+HOAJHQStnDdmTm8RkcEUbGwTu/otpizXgnk0faPpPmgEjQQGDlOkZ4SXHoU
                    N7O7EvbjjQHjY0BwcREt5+dj+a9bo0XsGUAHic0E/7fqEK7R2+7DCKYHffZeXNloDZB3iSY
                    kQnUO3D3BuelTvq7OWexBTTI0HJWUQvcPCEU1a9QXyN/wD2Ef8AVBW0Gfq76zmYYF1dpNSK
                    xcGtuSQ0tEak2K2R2gZUPiho3Q4OBPAnd6LDxuJL3VXTMUnSRoC4hrWjym6HeDwrEbmmnCl
                    V7ObVLKdTuwXVasAOIgNAlhI6QQOZHNFeHwjgylhTb/7lS82OgJ4oe7MGiyqC1rqlR2lO2R
                    pk3qOOgG4BegbNwxc81HCT6TzQuymh21D/AGxeRSZhadg9wzfytMn5DzXnva/YZZiDkMZmh
                    zh/EZB+AXom3BnrF3MMb6yVQx2wqlV5fPL0WdziDYXRg2kAONcn5XkzHx0U1NgcbWUQhS3T
                    CfJaGtI5yrFDGupNyAAgcV1XFsfciDu36iIVI3+77psKtouzyrLyBQ4WozCN8JBkSGmLxZx
                    U+GoQ8m0G6ysPUykGJC1m4gcD8x8v/CB1hMZt54UmIpExA3fFT7EwTXOL3zDIMcTffyhRDG
                    Mymzg60GRljfIifdS0MeA0i4kzZAdwbhBIGuJorcxO0mhuYXBEg7pGoPAx81JhMa17c+g5l
                    CGIxDocIgH0kaHqnUKr8oNzFhy6c+aWY8JPdNqldxLv2jj/ABH4qDBn9o3+YfEKPvZuloPA
                    e07gQfQhDVLTtFIxaUmIxIYJKzztVn3TJ8woMfig9o4iZHks7WmxYSxFfKvN2i1zmhpsbHz
                    Vl2Oph2UuE/WvBCrHAGSpKdZuaZstBh8kru2mrRcHLsyGxt5+mVvv+K2W4seGSACJN9DYx7
                    pbtzRlZxADwq+N2sxrzTnRtzBy5joC7SYutvZWNYMO1pqDMJneTJmwGt0M4Cs9z75ROYEDQ
                    5jr6b+CKcDRpiIA4eQWyMAYCqfws20m0HVnnwyBxNo/H6up64bQpuqVHFwa0uMmdATotDOA
                    EH/pI2hkwjwNXkMH9Rk/7Wu9Vob4jS5rsZQLhxiMXVDaTc9V8uIJAGsuMkxqR7Irb2CxrmN
                    qGrSzgXpkOEH90v8APWFV/Q/h3OrV6xnKxgb5vJM+Qaf7l6rh6vij98AxzINvRrQtG0dVHy
                    uu2mgvJqODeaho1IoV2iYfYEbiD95p4hUm7PdiQan2nUvuucXRFsrQbAcItcFex1tnUK8Ct
                    SY+DYPaHDylUNq9j8LVqipDmGwcGOLWvaNGuAS+5r+Eo/8AE3hw/wC157sXt4cIQyozvaQM
                    jKYqMH3Wlrv3biDG7gi81aGLpnFYao2oDeo37zCd5bqPNE3/AKVQme6YSbGQD8VhbQ7JYdl
                    QYjDj9Xqg/apjwuDtWvpzD2neLdQjcwObtKSJKduApYWJqU6LTUqEho4CSeTQNT9GBdDlXt
                    NtCs1zcHQfSpG2djJqkcTUOhjc2I470eYXZbHk52y0HLB5u+yPgTyRNh6WUQGho3AWA8kEM
                    YYLPKKaTdheNHvxSY6ufC0AN/p3km5KrMeahzvszVrfgTx5BGu1exVRrXuFU1ovSonwtmZg
                    uFzAsPeVV/wxjqzhVPd4fu4yg+OSP3gN3z4QgMZtaGztrnH3WH39Rou4taNxF/OdFJg9ssL
                    ajCQxrhBeAXRE3IbeLnSfPRGmB7GUajg/FPOIcJJH2Kc/yA3/AKiVl9uOy+HpYY4jDUhTLC
                    S9rbBzCYJji2xtuzcFYiIFqGZrzt/X1/Oqd2Y2PXYcwrUy0+JpaC5pa64IM3C9EbiXsZBpy
                    Iu5t/UASgD9EmK7yk+kT/lvGTk2sHOy/wBzHkfzFeh4CqDLCbtMdQdD9cFazvBBoofc0Gqw
                    2yyTO4ndfrxQ52j2tWbWLaTTlAG7ff8AJGuLoNM6X9/zVOnRY8SamRws4WuR97TeISHtJ4W
                    2CYNy4WvCwxSvpi0TMXmImTpyiPdKWxwPRMzWlJtejMYaMhRtp7uaU0pMWnmQB6myaHFSBM
                    JIWYMB4UBatqleJNhbT6lZmX1kK5TehcbRNjop2J1UIdG66dVqAm6u4jDsDJHDVUXYQGI7i
                    VRe6W3m6e21lCHnyhTNvxhCcBCBuK7W/lKQlOYACeh+vdNqAGPrpH1vCG8puzCkp1YuNyss
                    rSIhUQFM12imFGgp5THGfVKClaBKYHLM+E9E8N5BWJ8P9XyCaylTgeLyT2BkQXDUn1QFyYG
                    ADp9VXfjDTPw+C0cBtwgySqVWgxwg1IE/RlUn7NF4rCOY/BG0hA9m5lH9kYjbwMXtpbqhbt
                    5VdVZSy3mrEfxObDfg4eqpnBVZGV4PnHxUeM/WWmnTkAvc0iA0mWuGU8oLvitEbgHCiubPp
                    nbCaRp+jYNpjHUB9w04O8/5rCfVvuiutiAxzHTYBvpmGb/qmYPC0qFItY0Av8TyBdzjclx3
                    /JD/AGqNU0CaQzOadBrlNjHsfJOtY9tm0bd+C+QbR8VJ329DfZXE95QpvdYkb+AJG430W2x
                    4+rIrQFlKz30qPEnMw8h7i6bnjj9eSr4msbjSx/4lS1W1JQN2xvOY9XSVe74rKw85aZNsx9
                    g1XaVaQbxEjduMKWrLFKKhcQToEzEVCfCFC6rz6W/NM70jSOKlqBvop8TiBSpOPI+ZOg9VQ
                    2g4OpFjrtztYQd7XtOcebaiH+021Ax1JrnGM4c7mGyZ8iBbforT6ji2m11nPd3j28MxADfJ
                    sDyQkpgjQ1+j6o7DCo90ya2U9KAc0mP5qjx5FGGC7R+MmbkxbSN5+uKAduY0tqvpWa0Oc4b
                    rPcXH3JUDtpgAZbEe4HFJc7OFsj0xeLOSV6Ri+0QDgOUrKq7WkzxugV20nG7ioam1HT9se6
                    VkrY3StaMp20KXd1HMkG5Eggj2VfMuXICAu3uLmgnqB9khhcCuXKJTmgKSo8uMn7X4Jjqy5
                    coERwFGHqdlQkQUi5QoeeVI0am1ufG1hvV1tcBpAGvn7pFyWcpLTRNJtR4zAiAD5xu8+Pmk
                    c3rpbrz8pXLkPkja27TIgxrz+YUlIzPFKuVni1bRkBPbTunNokEEpVyHcVZibypmxwTsK0E
                    wQFy5RBtBrCe1jZ0EBI1jSdAlXK8qbGisJjqIvuv8kzZ+DBxbXuILWAQCR9oydeAF+sLlyO
                    Fxv4WbVsbt+V6HVymmB4r6R+OizXCo2cvdtiTDqlzHINSLlvXDugs7sz2jpik1lUCkBOSo4
                    gMeNftGzXX+yddRyIKe2MPr31Ij/wCWn83LlyIIHYJU52zh5tWpHpUYT6Ayo2YsvJcRDIIA
                    IOYm0kj7ojQa8YXLlCr2hJRqRlHLT+kqKltLK5zXDKcxDSbNeJMQ42DuRjQpVypWApDiTrD
                    j0g/AqDF49rGlzyWgC9iPeFy5CoACg6ltanWxWc0KlXu2/s2hmbxSHB8bgJsTyWxg8XVqPz
                    VKJpjXxETAvuK5cqenxgIY7Xy6p3g0iOcNi/qTbWAEMF54pVybE0EZCZK9zQAClE63T8i5c
                    glcRwtOkhbJZcv/2Q==" alt= "Far Cry 6"></img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> Far Cry 6: </p>
                            <p className="jogoDescrição"> Entregue-se ao mundo sombrio de 
                            uma guerrilha revolucionária atual para libertar um país de um 
                            ditador e seu filho. </p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            {/* <p className="textoPreço"> </p> */}
                            <p className="descontoPorcent">-29%</p>
                            <p className="valorAntigo"> R$ 256,99 </p>
                            <p className="valorAtual"> R$ 189.90 </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                <div className="seçãoJogo">
                    
                    <img className="jogoFoto" src="data:image/jpeg;base64,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" alt= "Rocket League"></img>
                    
                    <div className="descriçãoJogo">
                        <div>
                            <p className="jogoTitulo"> Rocket League: </p>
                            <p className="jogoDescrição"> Rocket League é uma competição híbrida radical de futebol estilo arcade e destruição automotiva com controles fluidos e fáceis de entender baseada em física real. </p>
                        </div>
                        <button className="botaoVejaMais"> Veja Mais </button> 
                    </div>
                   
                    <div className="preçoJogo">
                        <div>
                            {/* <p className="textoPreço"> </p> */}
                            <p className="descontoPorcent">-100%</p>
                            <p className="valorAntigo"> R$ 36,99 </p>
                            <p className="valorAtual"> GRATUITO </p>
                        </div>
                        <button className="botaoComprar">   COMPRAR </button>  
                    </div> 
                </div>

                
                
            </div>
            { Footer() }
        </div>
    )

}

export default All_Games;
