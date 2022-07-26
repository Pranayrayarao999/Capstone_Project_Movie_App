package com.example.userauthentication.rabbitmq;

public class UserDTO {
    private String emailId, userName, password;

    private boolean updateFlg;

    public UserDTO() {
    }

    public UserDTO(String emailId, String userName, String password, boolean updateFlag) {
        this.emailId = emailId;
        this.userName = userName;
        this.password = password;
        this.updateFlg=updateFlag;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isUpdateFlg() {
        return updateFlg;
    }

    public void setUpdateFlg(boolean updateFlg) {
        this.updateFlg = updateFlg;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "emailId='" + emailId + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
