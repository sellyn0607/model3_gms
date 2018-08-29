package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component // 얘를 빈으로 사용한다는뜻
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
