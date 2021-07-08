import { View, Text } from "@tarojs/components";
import styles from "./index.scss";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/index.scss";
import { navigateTo } from "@tarojs/taro";
import { useEffect, useState } from "react";

const Index = () => {
  const [isSuper, setIsSuper] = useState(false);
  const [isSigned, setIsSigned] = useState(true);
  useEffect(() => {
    Taro.checkSession({
      fail: () => {
        setIsSigned(false);
        Taro.login({
          success: res => {
            if(res.code){
              Taro.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data: {
                  appid: 
                  code: res.code,

                }
              })
            }
          }
        });
      }
    })
  },[])
  const checkSignIn = () => {

  };
  return (
    <View className={styles.container}>
      <View className={styles.buttonLayout}>
        <AtButton
          className={styles.button}
          type="primary"
          onClick={() => navigateTo({ url: "../schedule/index" })}
        >
          选择空闲时间
        </AtButton>
        {isSuper && (
          <AtButton
            className={styles.button}
            type="secondary"
            onClick={() => navigateTo({ url: "../schedule/index" })}
          >
            创建排班
          </AtButton>
        )}
      </View>
    </View>
  );
};

export default Index;
