package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component // �긦 ������ ����Ѵٴ¶�
@Data // getter setter
public class MemberDTO {
	//
	String 	userid,
			password,
			ssn,ssn2,
			name,
			roll,
			teamid,
			age,
			subject,
			gender;
}
