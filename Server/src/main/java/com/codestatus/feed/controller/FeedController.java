package com.codestatus.feed.controller;


import com.codestatus.feed.service.FeedService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping("/feed")
public class FeedController {

    private final FeedService feedService;


    public FeedController(FeedService feedService) {
        this.feedService = feedService;
    }
}
