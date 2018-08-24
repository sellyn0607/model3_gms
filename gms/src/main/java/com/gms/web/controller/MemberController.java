package com.gms.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gms.web.domain.MemberDTO;

@Controller
@RequestMapping("/member")
public class MemberController {
	@Autowired MemberDTO member;
	@RequestMapping("/add")
	public void add() {
		
	}
	@RequestMapping("/list")
	public void list() {
		
	}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/retrieve")
	public void retrieve() {
		
	}
	@RequestMapping("/count")
	public void count() {
		
	}
	@RequestMapping("/modify")
	public void modify() {
		
	}
	@RequestMapping("/remove")
	public void remove() {
		
	}
	@RequestMapping("/login/{dir}/{page}")
	public String login(@PathVariable String dir,
			@PathVariable String page) {
		
				return "login:"+dir+"/"+page+".tiles";
		
	}
	@RequestMapping("/logout")
	public String logout() {
			
		return "redirect:/";
	}
	
	@RequestMapping("/fileupload")
	public void fileupload() {
		
	}
	
}
