﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerButton2 : MonoBehaviour
{
    public GameObject button2;
    Animator clickbutton2;
    public GameObject charObj;
    Animator charAnim;
    public AudioSource pickUpAudio;
    // Start is called before the first frame update
    void Start()
    {
        clickbutton2 = button2.GetComponent<Animator>();
        charAnim = charObj.GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        if (Input.GetMouseButtonDown(0))
        {
            if (Physics.Raycast(ray, out hit))
            {
                GameObject obj = hit.collider.gameObject;
                Debug.Log("obj: " + obj.name);
                if (obj.name == "button2")
                {
                    clickbutton2.SetTrigger("button2"); //play the animation             
                    charAnim.SetTrigger("Pickup");
                    pickUpAudio.Play();
                }
            }
        }


        if (Input.touchCount > 0) //using mouse
        {
            var touch = Input.touches[0];
            if (touch.phase == TouchPhase.Began)
            {
                if (Physics.Raycast(ray, out hit))
                {
                    GameObject obj = hit.collider.gameObject;
                    if (obj.name == "button2")
                    {
                        clickbutton2.SetTrigger("button2"); //play the animation  
                        charAnim.SetTrigger("Pickup");
                        pickUpAudio.Play();
                    }
                }
            }
        }
    }
}
