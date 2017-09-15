package com.gms.web.domain;

import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class ArticleBean implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter
	private String id,title,content,regdate;
	private int articleSeq,hitcount;
	
}
