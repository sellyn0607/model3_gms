package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component 
@Data
public class Image {
	private String 	imgSeq,
					imgName,
					extension,
					userid;

}