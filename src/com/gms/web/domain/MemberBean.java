package com.gms.web.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class MemberBean {
	@Setter @Getter
	private String id,name,password,phone,ssn,email,profile,birthday,gender,major,regdate;
}
