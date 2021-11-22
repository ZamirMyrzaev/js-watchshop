import React from 'react';
import './Footer.css';
import RolexLogo from '../../assets/logo/rolex1.jpg'
import Patek from '../../assets/patek_logo.jpg'
import Hublot from '../../assets/hublotLogo.png'

const Footer = () => {
    return (
        <div>
            <section className="brands">
                <p className="our_brands">OUR BRANDS</p>
                <div className="bg-line4"></div>
                <div className="logo">
                    <img className="rolex_logo" src={RolexLogo} alt="Rolex" />
                    <img className="rolex_logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABX1BMVEUAAAAAAAIAAAUDAAD/9c//+dL/8Mz/+dT//9//7sb/9s7/88wIAABGRET/7Mb//dncvJz/99nLqoAWFhZDOC//5b5TRz//9NH//9ZlRSh3XklcRzgzKycTDgymoIymmo2om4jBr5dkV0pwV0eKfHKqkHSDeGf/8bo5Mi60pJHz471bQCiXe2RSTUerl4QeGxu7pYdoWlHWwZ8uJB0xMC5KMCRKRTzj0LjEuqVybl4nIx+CZUmAalVDODLazrfy5MHGooFqRyVvUTc8IhR2YlNiUEaBZU+fhXB9Zlh/XT3UtJFVPDI1Jh+VdFuLZkp5V0FsUzypiGdWQi8kExA3JSGGdV6Vg2WskGvBtJGAcmhwXkibinrx06SsjGfpzaiUgXHNvJDryZvApZCIcVEsGA7WuKM9JiFjWVj/872EWkH/4K0fHSTtwZr44sq6n43Qr5H81bNvSD1MNR9NQS7c0rFewe8QAAAK0UlEQVR4nO2bi1vaWBbAT3gpD2ksSZBXC8FYkDcqKA+xlIeloqCjMwgTF63brlOLs/X///beEAJ12hl3v92Sbs+vXyEkIVx+3nty7gMABEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEG+IYxx3iX4btheBZT1KBhYNZsj5Al5DFGbeWfeZfg+SG3AjsldgMK8C6J7GOAaxVI5m0/trlQAm+KfwoDo8VQb1T3eYl3IzLs0OoeBzMujrXC1+qrkXPDPuzS6JxUvuqBRA06qzbso+qYs1qmtOpyLEN4CKASDGOa/CAObjaNqKQAbTQj7UvsAfok338+7WPqEyLp6XXxdMkAGzn2bAmx6Pa9b+XkXS7f0ioLjTYM0xXAdArXwAZx7BMAE4guINfGgrQb1Wl15MtQbKbGPGcQfWG23D9vFw0bR6z06OvJ2jjqd6pHH4/W8lHrzLpvuqHW77cZVse4jCA3vMcXnqXaqntjGvMumPw64E3/TR/IFkovuk2YYSRGDDfiJC+BwzQMUH812jSvVOIBSGAzCfl2oe2gQM2KEf4gRlkhL7JI6tQqnYkQE8HpintK8i6VPjGCQul3SDv09Ist1wYCB9BHr8y6WbglwJJb742UiC2olF4ljB/Mukr4pNCWA+D5wRWyBf4qR/Ot1u6VSu71fKhbfzbs8uqcnSd14/KrUbjQS8y6L7nGdnnEFqQliScTJw8dAmqIw7zJ8N1z8LInzLsN3g5CWAvMuw/eCEYQN7A8+FtIXZLA/+FiM2HdGkP8cIwZm5L9L9BeFdOlkPHe1lE6XSC7+jBAMPntOWYPnQUoyGUwebAaTdC0DqYg7zX5kfI2e1Gw2z86atQAYINObTOuU9/cBCvu1CJRrNW2KunZeA6h7z2ulZigULJOOkhQas0qTtHoymZQoyf43NvEIKi+sLwg3NwOv8jo4GLJE4SLlicJiFpbdZrONkoWExcqBshLklm+qU4Mf2Q8yS2i1SALfH50RZRTxZwmA+5V0gepXV5HJB8Y95IPCHkpbtpm3IfXBZFcubnP2yGG702q1Op1Oy8W3l/FX3L/42w6hv35zUyQvDfJwOPTBDqlVz0LLy9vPotHoGizbtlcVIkSWk8oCgeeTwIytBOWWmBHF2mWLrRNZTTUzFSUiqywRWUJ7RlaVyorFDjY23r49rSxswwdbZafX613k7bYMxK3WizWKHifS7l+klecyf9NykBY1ILKk8aHNxUW1q7e8EJycr8gyQvmWv9SuEZRH441Q65LImrQfUSKXzkkSqVnd9lRW55zWLHWizMcuC3s2dWVE3lqBuMWu30UlFSqLVpDtm8Fb8nUH6cvhkGzQiYjFRXWmeXkhPTl/XLMKt/z19BrRuxGtTEbYYa8LM7LS5F2Rsaz4jCxSs/Ynsv7ukZJUltKemxYbQ2Tpd32XJit4MziBsjwIvxsOG6DIcmqyTNHJ+Qk3kWXIO2dXflBZDH1HhmUjtBmOUWQFpJ/rIEhnmqwGleWtKrIY8L2MlbqW9bGsktvG7dtNOpb1XqtZrIOGdwdkh3ugyHp6N5Flm5FFAnyeX5+9RvSOVfqFsMayrj6bVHcrshzpPSpL0mR5veRuG57IOvPExKN4dnxoz71AArxN57IICf6GhCp5QB76w+EWnSFdevq0Nv6TL5uCk/MTbsvBtoV3zs51UVkUxzWbhuQDWZcPZRUVWVWlGQb+EfP5j2LnypE3vD1PZJn0O+1feZ+l957g+o18ApnBYIuEGXnYpMMHRFZ4fGNbdlcq64R7pRlmLZV150zIorJqvf39i2tZLhNZrdFotKdA4r5j74GshipL4DjOdxSLCfA61hHEtYs0b3MnIG6yriusqQmInqi8eP+eZlo8e0Ca4mBELYWGLQdjnJVlcS9TKoosizvXd1pmVhRF71TYHBBZ7PU46RpRWQFF1t6MrKtTKqsTo3h8HDhek+dYNW0xVxJAZdlNJrvd3NejLOt9KPRLSKKD57/xg326LzP8QDPUqSz3ctpRoCjN0LYDcDsb4aN38kdCUvGXlD8uCTlBEHK9EZV1OaKy0g9keTsiXXfDpYDK6nx682YrnKOH46aFiCtF0OOYa8WmZQXQvxm8IoU3OlglxGuyDFn3NHVw29foz3Qs9mnVit5lpxdMypOYlWnRZjgaiZ/LOosDnBcbWjZFZIWnbyeydByz7Gkw0ApvpOF9MLgbkLT0Q2v4israG8tySa0kGI3KyETCbYrQnbfWadWK8lkwMMx46C8pSySzJ3xFVqlLZIWLxQ1lVJWmZ1SWkWHGg6xElo7vhnat0rzjB6wsZ0m0aQ2H8c9kdSe5E5WldHd6brvWIaGytCFSWrPG3Z1Mi53IGs3Iksi1wlclTYnxcLZmNSw6l6V+0RDfmuy9/DByTJshkRWfHEks2BRZcG/TqlaUl6eyPk5lsYos9ouyrr4iy9ty61gWiVnjBpCq3GhrOnos6/sLWT2bbU1VFHWyM7LutJg1ldUKaSGqRLvX4fjpVFZRzbMUGrH05Ij+xvOVmqUUq8/LDm33dUv6TNavdIgpnb2YyoJde0U9+YGsj+pWRqayWEXWiK6EIJypss7Ovior1kxnKTq8HVbMafVvmLdK09SmP2TfLrWILLqHyGq3r64OD6/Yk8Tiiirr3ROz2mXetuSnsqLacERGzlNZMpHFjtiRkquGoJQmNS8sNTVZjmLnfPrBJQ9Jv+J59/KK1sPSCwwkMrnxpisjzoyNFARxwyUIfuVbMJzKAVdOJcSUek5CVNfL5MSZhTO5jKDGrEI9oZxVgFRdmACRHPnAAld2aWUoRyJTWf4NBS4n6G4xznRO1Kg9/Fvv/8LWZzOtzMNjD45/4agGzqEgCIIg+oWB8mm3XTqhv7mv0184icCdh+ndyx9OQT2soM4LnXh9vk6H/PfNt8zzI1Ps+I6rEvn+lZUFm3klBH3zQpm421nJkdyWV6CpqxFO+VNeGRfU4zTgt0Ds+EhXpHBMkvDreygUNg2warJuk8Ryx0xkZSHgCixZxj1E9s7PJwubm5tzLvO8KJQ6SiZZiNBuy3jfqjlkJg1vx6TIouRv6SPHJ3/jdbho4ZtRrwrqSncGfGoXePUJd3sPk5pFWVMG6Zu84P+BZZGgXkppr3y1rTfHx0TWSm7nyRq8ozHr/vffwyTc34bIcVmGCJ98tbV18EN2XhjIxF3gOm23DxvH4DvueL17VFYC8uuQUQK83W630NGHFAjOJJFFYedd7rlAZaWgUOscx2Ii+DqB1MmGEXpPEpB50h/XLMN4Gsh0AR+tHPidl4lM5kf95UWiIYAhEDBEOqIWswSWhPddS21Bi1mkHeaBlwH8luRXL/X/j79Bx5gZKFBZ6ui5UCXhfGkhPyvrueXMfvGjy4JMKU7yLFetWifp+niX8E86VBe1k9ThfjKPsWnhnaQ5/mQf3w31N6L+TTDW2t3DbveIZPBi9ahaJalETpEVqNDUYX1vb+8pXX6za6GV7CeTTFc96HfK5n8KyQGEmvf8vEy2xU+fPnFcBnKcMgjc285B9H53d/d+m77K79DWmqfIz+db6LmiNCrDZOR8ZgmH/lZzzBs6kU91qYPpjDaoztBtZjIVr67PZZTZfLSIIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCPIp/AYWRwwFvJ/jkAAAAAElFTkSuQmCC" alt="Rolex" />
                    <img className="rolex_logo" src={Hublot} alt="Rolex" />
                </div>
            </section>
            <section className="contacts">
                {/* <img className="footer_background" src={Footer_img} alt="footer" /> */}
                <div className="contact_text">
                    <div className="first_contacts">
                        <p className="about_shop">
                            О магазине 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                    <div className="first_contacts">
                        <p className="about_shop">
                            Наши контакты 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                    <div className="first_contacts">
                        <p className="about_shop">
                            Рассылка 
                            <p className="about_shop_text">Lorem, velit consequatur excepturi odit magnam architecto aperiam blanditiis corporis, minus dolorem hic molestiae commodi.</p>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;