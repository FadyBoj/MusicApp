import {
  View,
  Text,
  Alert,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import axios from 'axios';
//Icons
import EyeIcon from '../assets/EyeIcon';
import EyeOffIcon from '../assets/EyeOffIcon';
import {Keyboard} from 'react-native';

const Password = ({navigation, route}) => {
  const lastInfo = route.params.userInfo;

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [approved, setApproved] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState('');
  //Password values
  const [passwordText, setPasswordText] = React.useState('');
  const [confirmText, setConfirmText] = React.useState('');

  handlePasswordChange = text => {
    setPasswordText(text);
    if (text.length >= 8 && text === confirmText) setApproved(true);
    else {
      setApproved(false);
    }
  };

  handelConfirmChange = text => {
    setConfirmText(text);
    if (text.length >= 8 && text === passwordText) {
      if (approved === false) setApproved(true);
    } else {
      if (approved === true) {
        setApproved(false);
      }
    }
  };

  const handleCreateAccount = async () => {
    try {
      setIsLoading(true);
      Keyboard.dismiss();

      const {data} = await axios.post('http://localhost:8000/users/add-user', {
        ...lastInfo,
        password: passwordText,
      });
      setIsLoading(false);
      console.log(data.msg);
    } catch (error) {
      setIsLoading(false);
      setModalText(error.response.data.msg);
      setModalVisible(true);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(prevBool => !prevBool);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prevBool => !prevBool);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.container}>
      <Modal
        coverScreen={true}
        style={styles.modalBrightness}
        isVisible={modalVisible}
        animationIn="pulse"
        animationOut="fadeOut"
        animationOutTiming={100}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={{width: '100%', height: '100%', flex: 1}}
          activeOpacity={1}></TouchableOpacity>
        <View style={styles.modal}>
          <View style={styles.modalTexts}>
            <Text style={styles.modalMainText}>{modalText}</Text>
            <Text style={styles.modalSecondText}>Please try again</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            style={styles.modalClose}>
            <Text style={styles.btnText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.inputContainer}>
        <Text style={styles.mainText}>Create a Password</Text>
        <View style={{justifyContent: 'center'}}>
          <TextInput
            onChangeText={text => {
              handlePasswordChange(text);
            }}
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={handleShowPassword}
            style={styles.eyeContainer}>
            {showPassword ? (
              <EyeOffIcon width={25} height={25} />
            ) : (
              <EyeIcon width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.warning}>Use at least 8 characters</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.mainText}>Confirm Your Password</Text>
        <View style={{justifyContent: 'center'}}>
          <TextInput
            onChangeText={text => {
              handelConfirmChange(text);
            }}
            secureTextEntry={!showConfirmPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={handleShowConfirmPassword}
            style={styles.eyeContainer}>
            {showConfirmPassword ? (
              <EyeOffIcon width={25} height={25} />
            ) : (
              <EyeIcon width={25} height={25} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.warning}>Make sure your password is correct</Text>
      </View>

      <View style={styles.navBtnsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.navBtn}>
          <Text style={styles.navBtnText}>Back</Text>
        </TouchableOpacity>

        {approved ? (
          <>
            {isLoading ? (
              <View style={styles.nextBtn}>
                <Text>
                  <ActivityIndicator color={'#fff'} size={25} />
                </Text>
              </View>
            ) : (
              <TouchableOpacity
                onPress={handleCreateAccount}
                style={styles.nextBtn}>
                <Text style={styles.navBtnText}>Create Account</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <TouchableOpacity activeOpacity={1} style={styles.nextBtn}>
            <Text style={styles.notApprovedText}>Create Account</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
    gap: 40,
  },
  mainText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'ProductSans-Medium',
    width: '90%',
    paddingLeft: 10,
  },
  inputContainer: {
    width: '90%',
    borderWidth: 2,
    gap: 14,
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#141414',
    paddingLeft: 2,
    paddingLeft: 20,
    paddingRight: 50,
  },
  warning: {
    paddingLeft: 13,
    width: '90%',
  },
  eyeContainer: {
    position: 'absolute',
    right: 0,
    padding: 20,
    height: '80%',
    justifyContent: 'center',
  },
  navBtnsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  navBtn: {
    borderColor: '#303030',
    borderWidth: 1,
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 20,
  },
  nextBtn: {
    borderColor: '#303030',
    borderWidth: 1,
    width: 150,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBtnText: {
    color: '#fff',
    fontFamily: 'ProductSans-Medium',
  },
  notApprovedText: {
    color: '#3d3d3d',
    fontFamily: 'ProductSans-Medium',
  },
  modalBrightness: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
    zIndex: 10,
  },
  modal: {
    width: '99%',
    height: 250,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    borderRadius: 12,
    zIndex: 20,
    position: 'absolute',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 30,
  },
  modalMainText: {
    color: '#e3e3e3',
    fontFamily: 'ProductSans-Medium',
    fontSize: 18,
    letterSpacing:0.3,
    lineHeight:25,
    width: '70%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalSecondText: {
    color: '#e3e3e3',
    fontFamily: 'ProductSans-Medium',
    fontSize: 12,
  },
  loginBtn: {
    backgroundColor: '#07571c',
    width: 170,
    height: 50,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#e3e3e3',
    fontFamily: 'ProductSans-Medium',
    fontSize: 17,
    fontWeight: 'bold',
  },
  modalClose: {
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#114e69',
    borderRadius: 12,
  },
  modalCloseText: {
    color: '#fff',
    fontFamily: 'ProductSans-Medium',
    fontSize: 20,
  },
  modalTexts: {
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
});

export default Password;
